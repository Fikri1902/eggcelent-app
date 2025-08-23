import { Camera, Upload, Home, Bell } from 'lucide-react';
import { useState } from 'react';

export default function EggCheckerPage() {
  const [image] = useState<string | null>(null);

  return (
    <div className="max-w-md mx-auto px-4 py-6 pb-24">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-eggcelent-yellow rounded-full" />
          <div>
            <div className="font-bold text-gray-800">Eggcelent</div>
            <div className="text-xs text-gray-500">Peternak</div>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500">
          <Home size={20} />
          <Bell size={20} />
          <div className="w-8 h-8 bg-gray-200 rounded-full" />
        </div>
      </div>

      <div className="bg-eggcelent-yellow text-white text-center py-2 rounded-lg font-semibold mb-4">
        Egg-Checker
      </div>

      <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center text-gray-500 mb-4">
        {image ? (
          <img src={image} alt="preview" className="max-h-full" />
        ) : (
          <span>Arahkan Kamera ke telur atau tap untuk mengambil foto</span>
        )}
      </div>

      <div className="flex gap-3 mb-6">
        <button className="flex-1 bg-eggcelent-yellow text-white py-2 rounded-lg flex items-center justify-center gap-2">
          <Camera size={18} />
          Ambil Foto
        </button>
        <button className="flex-1 bg-white border border-eggcelent-yellow text-eggcelent-yellow py-2 rounded-lg flex items-center justify-center gap-2">
          <Upload size={18} />
          Upload Gambar
        </button>
      </div>

      <h2 className="font-semibold text-gray-700 mb-2">Riwayat Scan</h2>
      <div className="bg-white rounded-lg shadow p-4 text-sm text-gray-500">Belum ada riwayat.</div>
    </div>
  );
}
