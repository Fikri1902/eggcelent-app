import { Lock, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function EggSightPage() {
  const [authorized, setAuthorized] = useState(false);

  if (!authorized) {
    return (
      <div className="max-w-md mx-auto px-4 py-6 pb-24 text-center">
        <div className="bg-eggcelent-yellow text-white py-2 rounded-lg font-semibold mb-4">
          Egg-Sight
        </div>
        <Lock className="mx-auto text-eggcelent-yellow mb-4" size={48} />
        <p className="font-semibold mb-2">Akses Terbatas</p>
        <p className="text-sm text-gray-600 mb-6">
          Dashboard ini memerlukan otorisasi khusus untuk lembaga pemerintah
        </p>
        <button
          onClick={() => setAuthorized(true)}
          className="bg-eggcelent-yellow text-white px-4 py-2 rounded-lg"
        >
          Simulasikan Akses
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-6 pb-24">
      <div className="bg-eggcelent-yellow text-white text-center py-2 rounded-lg font-semibold mb-4">
        Egg-Sight
      </div>

      <div className="bg-white rounded-xl p-4 shadow mb-4 h-40 flex items-center justify-center text-gray-500">
        <MapPin className="text-eggcelent-yellow mr-2" />
        Peta Supply-Demand Nasional
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white rounded-lg p-4 shadow text-center">
          <p className="text-sm text-gray-500">Harga Rata-Rata</p>
          <p className="text-xl font-bold">Rp 2.150,00</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow text-center">
          <p className="text-sm text-gray-500">Peningkatan Kualitas</p>
          <p className="text-xl font-bold">5,12%</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow h-48">
        <p className="font-semibold mb-2">Produksi Telur Tiap Bulan</p>
        <div className="text-gray-500 text-sm">[Grafik]</div>
      </div>
    </div>
  );
}
