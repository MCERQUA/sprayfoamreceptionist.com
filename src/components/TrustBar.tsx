import { MessageSquareText, Clock, CircleCheck } from "lucide-react";

const ITEMS = [
  { icon: MessageSquareText, label: "Real, Practical Guidance" },
  { icon: Clock, label: "No Hard Sales Pressure" },
  { icon: CircleCheck, label: "Built for Spray Foam Crews" },
];

export default function TrustBar() {
  return (
    <div className="bg-moss">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-white text-sm font-semibold">
            <Icon size={18} className="text-terracotta" />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
