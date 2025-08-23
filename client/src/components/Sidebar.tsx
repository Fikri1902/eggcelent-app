// LOKASI FILE: client/src/components/Sidebar.tsx

import { Home, CheckSquare, Sun, Truck, Leaf, BarChart3, User, LogOut } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { name: 'Beranda', icon: Home },
    { name: 'Egg-Checker', icon: CheckSquare },
    { name: 'Egg-Climate', icon: Sun },
    { name: 'Egg-Spedition', icon: Truck },
    { name: 'Egg-Sight', icon: BarChart3 },
    { name: 'Egg-Sustain', icon: Leaf },
  ];

  return (
    <aside className="bg-white w-64 p-6 flex flex-col shadow-lg flex-shrink-0">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-eggcelent-yellow">Eggcelent</h1>
        <p className="text-sm text-gray-500">Sistem Rantai Pasok Telur</p>
      </div>

      <nav className="flex-grow">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={item.name}
              className={`
                flex items-center gap-3 p-3 mb-2 rounded-lg cursor-pointer transition-colors
                ${index === 0 
                  ? 'bg-eggcelent-yellow text-white font-semibold shadow-md' 
                  : 'text-gray-600 hover:bg-gray-100'
                }
              `}
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t pt-4">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-600">
          <User size={20} />
          <span>Pengguna</span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-600">
          <LogOut size={20} />
          <span>Keluar</span>
        </div>
      </div>
    </aside>
  );
}
