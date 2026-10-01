<?php
/**
 * Priority Hauliers - Production Contact Mailer
 * Host: cPanel / Apache / Nginx
 * Destination: hello@priorityhauliers.com
 */

// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit();
}

// Read JSON input
$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid payload"]);
    exit();
}

// Honeypot anti-spam check
if (!empty($data['honeypot'])) {
    // Silent success for bots
    echo json_encode(["success" => true, "message" => "Message sent successfully"]);
    exit();
}

// Sanitize fields
$name    = htmlspecialchars(strip_tags(trim($data['name'] ?? '')));
$email   = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone   = htmlspecialchars(strip_tags(trim($data['phone'] ?? '')));
$subject = htmlspecialchars(strip_tags(trim($data['subject'] ?? 'Website Inquiry')));
$message = htmlspecialchars(strip_tags(trim($data['message'] ?? '')));

if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please fill all required fields with a valid email"]);
    exit();
}

// Target email
$to = "hello@priorityhauliers.com";
$email_subject = "[Website Lead] " . $subject . " - " . $name;

// Email Body HTML
$body = "
<!DOCTYPE html>
<html>
<head>
<meta charset='UTF-8'>
<style>
  body { font-family: Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; }
  .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden; border: 1px solid #e2e8f0; }
  .header { background: #0B192C; color: #ffffff; padding: 25px; text-align: center; }
  .header h2 { margin: 0; font-size: 22px; color: #F87B1B; }
  .content { padding: 25px; color: #334155; line-height: 1.6; }
  .field { margin-bottom: 15px; }
  .label { font-weight: bold; color: #0B192C; font-size: 13px; text-transform: uppercase; }
  .value { font-size: 15px; margin-top: 4px; color: #1e293b; }
  .msg-box { background: #f8fafc; border-left: 4px solid #F87B1B; padding: 15px; border-radius: 4px; margin-top: 10px; }
  .footer { background: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #64748b; }
</style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <h2>Priority Hauliers Pty Ltd</h2>
      <p style='margin: 5px 0 0 0; color: #94a3b8; font-size: 13px;'>New Website Inquiry Received</p>
    </div>
    <div class='content'>
      <div class='field'>
        <div class='label'>Client Name:</div>
        <div class='value'>{$name}</div>
      </div>
      <div class='field'>
        <div class='label'>Email Address:</div>
        <div class='value'><a href='mailto:{$email}'>{$email}</a></div>
      </div>
      <div class='field'>
        <div class='label'>Contact / WhatsApp Phone:</div>
        <div class='value'>{$phone}</div>
      </div>
      <div class='field'>
        <div class='label'>Inquiry Subject:</div>
        <div class='value'>{$subject}</div>
      </div>
      <div class='field'>
        <div class='label'>Message / Cargo Details:</div>
        <div class='msg-box'>" . nl2br($message) . "</div>
      </div>
    </div>
    <div class='footer'>
      Received via priorityhauliers.com official contact portal.
    </div>
  </div>
</body>
</html>
";

// Email Headers (Authenticated for cPanel)
$headers = [];
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-type: text/html; charset=UTF-8";
$headers[] = "From: Priority Hauliers Web <no-reply@priorityhauliers.com>";
$headers[] = "Reply-To: {$name} <{$email}>";
$headers[] = "X-Mailer: PHP/" . phpversion();

$sent = @mail($to, $email_subject, $body, implode("\r\n", $headers));

if ($sent) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Inquiry sent successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Failed to dispatch email via mail server"]);
}
