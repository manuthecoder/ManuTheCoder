export function SectionHead({
  index,
  label,
  className,
  trailing,
}: {
  index: string;
  label: string;
  className?: string;
  /** Optional badge pinned to the right of the rule. */
  trailing?: React.ReactNode;
}) {
  return (
    <div className={className ? `section__head ${className}` : "section__head"}>
      <span className="section__index">{index}</span>
      <span className="section__label">{label}</span>
      <span className="section__rule" />
      {trailing}
    </div>
  );
}
