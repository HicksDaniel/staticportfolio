export default function ProjectLink({ label }: { label: string }) {
  return (
    <div className="flex h-full items-center justify-between gap-2">
      <p className="text-center">{label}</p>
      <div className="pi pi-directions animate-[pulse_2s_linear_4] text-2xl" />
    </div>
  );
}
