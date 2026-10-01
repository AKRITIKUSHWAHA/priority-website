import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  theme = 'light',
  className = '',
}) => {
  const sizeMap = {
    sm: { width: 155, height: 44 },
    md: { width: 210, height: 58 },
    lg: { width: 270, height: 75 },
  };

  const { width, height } = sizeMap[size];
  const isDark = theme === 'dark';
  const primaryColor = isDark ? '#FFFFFF' : '#151827';
  const blueColor = isDark ? '#60A5FA' : '#2B5EB8';
  const orangeColor = '#FF5A1F';
  const cutoutColor = isDark ? '#151827' : '#FFFFFF';

  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 340 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        {/* Dynamic Angled P Emblem */}
        <g id="Emblem">
          {/* Top Left Orange Facet */}
          <polygon
            points="14,12 38,12 28,34 4,34"
            fill={orangeColor}
          />

          {/* Lower Center Orange Facet */}
          <polygon
            points="32,40 56,40 46,62 22,62"
            fill={orangeColor}
          />

          {/* Main Blue Body of P */}
          <path
            d="M40,12 L96,12 C106,12 112,18 110,28 C108,37 101,42 90,42 L48,42 L44,50 L28,50 L40,12 Z"
            fill={blueColor}
          />
          {/* Bottom Extension Stem of P */}
          <polygon
            points="18,48 40,48 24,80 2,80"
            fill={blueColor}
          />
          {/* Inner cutout for P */}
          <polygon
            points="50,20 86,20 82,34 46,34"
            fill={cutoutColor}
          />
        </g>

        {/* Wordmark Text */}
        <g id="Wordmark">
          {/* PRIORITY in Bold */}
          <text
            x="126"
            y="48"
            fill={primaryColor}
            fontFamily="var(--font-heading), 'Outfit', 'Plus Jakarta Sans', sans-serif"
            fontWeight="900"
            fontSize="38"
            letterSpacing="3"
          >
            PRIORITY
          </text>

          {/* Left Line */}
          <line
            x1="128"
            y1="72"
            x2="158"
            y2="72"
            stroke={orangeColor}
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* HAULIERS in Orange */}
          <text
            x="166"
            y="79"
            fill={orangeColor}
            fontFamily="var(--font-heading), 'Outfit', sans-serif"
            fontWeight="800"
            fontSize="20"
            letterSpacing="6"
          >
            HAULIERS
          </text>

          {/* Right Line */}
          <line
            x1="294"
            y1="72"
            x2="324"
            y2="72"
            stroke={orangeColor}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default BrandLogo;
