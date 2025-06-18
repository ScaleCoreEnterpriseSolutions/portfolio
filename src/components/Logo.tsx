interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  variant?: "default" | "white" | "dark";
}

const Logo = ({
  className = "",
  size = "md",
  showText = true,
  variant = "default",
}: LogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const getTextColor = () => {
    switch (variant) {
      case "white":
        return "text-white";
      case "dark":
        return "text-gray-900";
      default:
        return "text-gray-900";
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon - Modern Geometric Design */}
      <div className={`${sizeClasses[size]} relative flex-shrink-0`}>
        {/* Main container with gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-accent rounded-xl shadow-lg transform rotate-3 scale-105"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary-400 rounded-xl transform -rotate-3"></div>

        {/* Core logo design */}
        <div className="relative w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
          {/* ScaleCore symbol - geometric pattern representing scaling */}
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
            {/* Core symbol - central circle */}
            <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="1" />

            {/* Scaling rings - representing growth and scale */}
            <circle
              cx="12"
              cy="12"
              r="7"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeOpacity="0.7"
            />
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              strokeOpacity="0.4"
            />

            {/* Arrow elements representing upward scaling */}
            <path
              d="M12 2L14 6H10L12 2Z"
              fill="currentColor"
              fillOpacity="0.8"
            />
            <path
              d="M22 12L18 10V14L22 12Z"
              fill="currentColor"
              fillOpacity="0.6"
            />
            <path
              d="M12 22L10 18H14L12 22Z"
              fill="currentColor"
              fillOpacity="0.6"
            />
            <path
              d="M2 12L6 14V10L2 12Z"
              fill="currentColor"
              fillOpacity="0.6"
            />

            {/* Corner dots for modern tech feel */}
            <circle
              cx="17"
              cy="7"
              r="1"
              fill="currentColor"
              fillOpacity="0.8"
            />
            <circle
              cx="7"
              cy="17"
              r="1"
              fill="currentColor"
              fillOpacity="0.8"
            />
          </svg>
        </div>

        {/* Corner accent - modern tech indicator */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full shadow-sm border-2 border-white"></div>
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-bold ${textSizeClasses[size]} ${getTextColor()} tracking-tight`}
          >
            Scale<span className="text-primary-600">Core</span>
          </span>
          {size !== "sm" && (
            <span className="text-xs text-gray-500 -mt-1 tracking-wide">
              ENTERPRISE SOLUTIONS
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;
