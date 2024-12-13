import { type LucideIcon } from "lucide-react";

interface ImpactCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ImpactCard({
  icon: Icon,
  title,
  description,
}: ImpactCardProps) {
  return (
    <div className="flex flex-col items-start text-start p-6 rounded-lg border-2 border-site-green">
      <div className="w-24 h-24 rounded-md border border-site-green flex items-center justify-center mb-4">
        <Icon className="w-10 h-10 text-[#006838]" />
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-site-green font-sofia">
        {title}
      </h3>
      <p className="text-gray-600 font-sofia text-xl">{description}</p>
    </div>
  );
}
