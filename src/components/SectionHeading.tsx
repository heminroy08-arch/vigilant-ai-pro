import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  className,
  as: As = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      ) : null}
      <As className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">{title}</As>
      {intro ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p> : null}
    </div>
  );
}
