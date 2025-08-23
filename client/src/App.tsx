// LOKASI FILE: client/src/App.tsx

import './index.css';
import Sidebar from './components/Sidebar'; // Pastikan nama file adalah Sidebar.tsx
import HomePage from './pages/HomePage';   // Pastikan nama file adalah HomePage.tsx

function App() {
  return (
    // `flex` akan membuat sidebar dan konten utama bersebelahan
    // `min-h-screen` memastikan layout memenuhi tinggi layar
    <div className="min-h-screen flex bg-eggcelent-cream">
      {/* Komponen Sidebar yang sudah kita buat */}
      <Sidebar />

      {/* Komponen Halaman Utama yang sudah kita buat */}
      <HomePage />
    </div>
  );
}

export default App;