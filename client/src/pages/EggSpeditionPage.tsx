export default function EggSpeditionPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-6 pb-24">
      <div className="bg-eggcelent-yellow text-white text-center py-2 rounded-lg font-semibold mb-4">
        Egg-Spedition
      </div>

      <div className="bg-white rounded-xl p-4 shadow mb-4">
        <h2 className="font-semibold mb-2">Input Stok Harian</h2>
        {['Mutu I (Premium)','Mutu II (Sedang)','Mutu III (Rendah)'].map(label => (
          <div key={label} className="mb-3">
            <label className="block text-sm mb-1">{label}</label>
            <input type="number" className="w-full border rounded-lg p-2" placeholder="Jumlah telur" />
          </div>
        ))}
        <button className="w-full bg-eggcelent-yellow text-white py-2 rounded-lg">Simpan Stok</button>
      </div>

      <div className="bg-white rounded-xl p-4 shadow h-40 flex items-center justify-center text-gray-500">
        Peta Supply-Demand Nasional
      </div>
    </div>
  );
}
