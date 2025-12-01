// ============================================
// FILE: app/components/ui/Logo.tsx
// ============================================

interface LogoProps {
  className?: string;
  variant?: 'default' | 'pro';
  fill?: string;
}

export default function Logo({ 
  className = "", 
  variant = 'pro', 
  fill = "#00A3FF" 
}: LogoProps) {
  return (
    <svg
      viewBox="300 200 250 180"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Mobarrez Logo"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={fill} />
          <stop offset="100%" stopColor="#39FF14" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Main M Shape */}
      <path
        d="M 320 350 L 340 230 L 380 300 L 420 230 L 440 350"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Orbital Ring */}
      <circle
        cx="380"
        cy="290"
        r="80"
        fill="none"
        stroke={fill}
        strokeWidth="2"
        opacity="0.3"
      />

      {/* Grid Dots */}
      <circle cx="340" cy="270" r="3" fill="#39FF14" opacity="0.6" />
      <circle cx="420" cy="270" r="3" fill="#39FF14" opacity="0.6" />
      <circle cx="380" cy="240" r="3" fill="#39FF14" opacity="0.6" />
    </svg>
  );
}