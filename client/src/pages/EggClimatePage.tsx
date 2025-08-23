import { CloudSun, ThermometerSun } from 'lucide-react';

export default function EggClimatePage() {
  return (
    <div className="max-w-md mx-auto px-4 py-6 pb-24">
      <div className="bg-eggcelent-yellow text-white text-center py-2 rounded-lg font-semibold mb-4">
        Egg-Climate
      </div>

      <div className="bg-white rounded-xl p-4 shadow mb-4">
        <div className="flex items-center gap-3">
          <CloudSun className="text-eggcelent-yellow" />
          <div>
            <p className="text-3xl font-bold">32°C</p>
            <p className="text-sm text-gray-500">Berawan - Grobogan, Jawa Tengah</p>
          </div>
        </div>
        <div className="flex gap-4 mt-4 text-sm text-gray-600">
          <span>Kelembapan 72%</span>
          <span>Angin 8 km/h</span>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow mb-4 text-center">
        <p className="font-semibold mb-2">Status Heat Stress</p>
        <p className="text-yellow-600 font-bold">Sedang</p>
        <p className="text-xs text-gray-500 mt-1">Suhu akan meningkat besok, siapkan ventilasi tambahan</p>
      </div>

      <div className="bg-white rounded-xl p-4 shadow">
        <p className="font-semibold mb-4">Prediksi 7 Hari</p>
        <div className="grid grid-cols-7 gap-2 text-center text-xs">
          {['Sen','Sel','Rab','Kam','Jum','Sab','Min'].map((d, i) => (
            <div key={d} className="flex flex-col items-center">
              <span>{d}</span>
              <ThermometerSun className="text-eggcelent-yellow my-1" size={20} />
              <span>{32+i}°C</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
