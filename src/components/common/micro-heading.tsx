import { ChevronsLeft, ChevronsRight } from "lucide-react";

export default function MicroHeading({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-2 text-sm font-medium">
      <ChevronsLeft />
      <span className="uppercase tracking-wider font-sofia text-lg">
        {text}
      </span>
      <ChevronsRight />
    </div>
  );
}
