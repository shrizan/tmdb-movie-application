export default function Chip({ title }: { title: string }) {
  return (
    <div
      className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1.5 px-3 font-sans text-xs font-bold uppercase text-gray-900 mr-2">
      <span>{title}</span>
    </div>
  );
}