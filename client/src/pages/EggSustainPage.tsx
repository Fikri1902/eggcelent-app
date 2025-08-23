import { useState } from 'react';

export default function EggSustainPage() {
  const [result, setResult] = useState<number | null>(null);

  function handleCalc(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const electricity = Number((form.elements.namedItem('electricity') as HTMLInputElement).value || 0);
    const feed = Number((form.elements.namedItem('feed') as HTMLInputElement).value || 0);
    const transport = Number((form.elements.namedItem('transport') as HTMLInputElement).value || 0);
    setResult((electricity + feed + transport) / 1000);
  }

  return (
    <div className="max-w-md mx-auto px-4 py-6 pb-24">
      <div className="bg-eggcelent-yellow text-white text-center py-2 rounded-lg font-semibold mb-4">
        Egg-Sustain
      </div>

      <form onSubmit={handleCalc} className="bg-white rounded-xl p-4 shadow mb-4">
        <h2 className="font-semibold mb-4">Kalkulator Jejak Karbon</h2>
        <label className="block text-sm mb-1">Konsumsi Listrik (kWh/bulan)</label>
        <input name="electricity" type="number" className="w-full border rounded-lg p-2 mb-3" placeholder="Contoh: 2500" />
        <label className="block text-sm mb-1">Konsumsi Pakan (kg/bulan)</label>
        <input name="feed" type="number" className="w-full border rounded-lg p-2 mb-3" placeholder="Contoh: 43" />
        <label className="block text-sm mb-1">Transportasi (Km/bulan)</label>
        <input name="transport" type="number" className="w-full border rounded-lg p-2 mb-3" placeholder="Contoh: 780,3" />
        <button type="submit" className="w-full bg-eggcelent-yellow text-white py-2 rounded-lg">Hitung Jejak Karbon</button>
      </form>

      <div className="bg-white rounded-xl p-4 shadow text-center">
        <p className="font-semibold mb-2">Hasil Perhitungan</p>
        <p className="text-2xl font-bold text-eggcelent-yellow">{result ?? 0} ton</p>
        <p className="text-sm text-gray-500">CO2 equivalen/bulan</p>
      </div>
    </div>
  );
}
