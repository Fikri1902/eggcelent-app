import { Leaf, Truck, CheckSquare, Sun, BarChart3 } from 'lucide-react';

interface Props {
  active: string;
  onChange: (tab: string) => void;
}

export default function BottomNav({ active, onChange }: Props) {
  const items = [
    { key: 'sustain', label: 'Egg-Sustain', icon: Leaf },
    { key: 'spedition', label: 'Egg-Spedition', icon: Truck },
    { key: 'checker', label: 'Egg-Checker', icon: CheckSquare },
    { key: 'climate', label: 'Egg-Climate', icon: Sun },
    { key: 'sight', label: 'Egg-Sight', icon: BarChart3 },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 flex justify-around max-w-md mx-auto">
      {items.map(({ key, label, icon: Icon }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`flex flex-col items-center text-xs ${active === key ? 'text-eggcelent-yellow' : 'text-gray-400'}`}
        >
          <Icon size={20} />
          {label.split('Egg-')[1]}
        </button>
      ))}
    </nav>
  );
}
