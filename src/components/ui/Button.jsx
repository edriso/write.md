const variants = {
  primary:
    "bg-primary-600 hover:bg-primary-700 text-white",
  secondary:
    "bg-bg-card hover:bg-bg-card-hover text-text-primary border border-border",
  ghost:
    "hover:bg-bg-card text-text-secondary hover:text-text-primary",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 font-medium transition-colors cursor-pointer ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
