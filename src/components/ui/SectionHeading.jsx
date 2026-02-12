export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold text-text-primary">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-text-secondary text-lg">{subtitle}</p>
      )}
    </div>
  );
}
