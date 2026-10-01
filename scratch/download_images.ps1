$baseUrl = "https://priorityhauliers.com/"
$pages = @("", "about.html", "service.html", "blog.html", "contact.html", "css/style.css")

$foundImages = @{}

foreach ($page in $pages) {
    $url = $baseUrl + $page
    Write-Host "Fetching $url ..."
    try {
        $res = Invoke-WebRequest -Uri $url -UseBasicParsing
        $matches = [regex]::Matches($res.Content, '(?i)(?:img\/[a-zA-Z0-9_\-\./\\]+\.(?:png|jpg|jpeg|webp|gif|svg|ico)|https?://[^\s"'']+\.(?:png|jpg|jpeg|webp|gif|svg|ico))')
        foreach ($m in $matches) {
            $imgRel = $m.Value
            if (-not $imgRel.StartsWith("http")) {
                $imgUrl = $baseUrl + $imgRel
            } else {
                $imgUrl = $imgRel
            }
            $foundImages[$imgUrl] = $true
        }
    } catch {
        Write-Host "Failed to fetch $url : $_"
    }
}

Write-Host "Found total unique images: $($foundImages.Count)"

$outputDir = "public/images/real"
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir | Out-Null
}

foreach ($imgUrl in $foundImages.Keys) {
    $filename = [System.IO.Path]::GetFileName(($imgUrl -split '\?')[0])
    $destPath = Join-Path $outputDir $filename
    Write-Host "Downloading $imgUrl -> $destPath"
    try {
        Invoke-WebRequest -Uri $imgUrl -OutFile $destPath -UseBasicParsing
    } catch {
        Write-Host "Failed to download $imgUrl : $_"
    }
}
