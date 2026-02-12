export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-8 sm:mb-12 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">{title}</h2>
      {subtitle && (
        <p className="mt-2 sm:mt-3 text-text-secondary text-base sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
