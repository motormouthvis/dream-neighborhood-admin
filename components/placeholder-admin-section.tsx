type Props = {
  title: string;
  description?: string;
};

export default function PlaceholderAdminSection({
  title,
  description = "This page is a placeholder while the full experience is being built.",
}: Props) {
  return (
    <div className="max-w-2xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">{title}</h1>
      <p className="mt-3 text-sm leading-relaxed text-zinc-600">{description}</p>
    </div>
  );
}
