import { useState } from 'react';
import './index.css';
import EggCheckerPage from './pages/EggCheckerPage';
import EggClimatePage from './pages/EggClimatePage';
import EggSightPage from './pages/EggSightPage';
import EggSpeditionPage from './pages/EggSpeditionPage';
import EggSustainPage from './pages/EggSustainPage';
import AuthPage from './pages/AuthPage';
import BottomNav from './components/BottomNav';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tab, setTab] = useState('checker');

  if (!loggedIn) {
    return <AuthPage onLogin={() => setLoggedIn(true)} />;
  }

  let Page = EggCheckerPage;
  if (tab === 'climate') Page = EggClimatePage;
  else if (tab === 'sight') Page = EggSightPage;
  else if (tab === 'spedition') Page = EggSpeditionPage;
  else if (tab === 'sustain') Page = EggSustainPage;

  return (
    <div className="min-h-screen bg-eggcelent-cream pb-16">
      <Page />
      <BottomNav active={tab} onChange={setTab} />
    </div>
  );
}
