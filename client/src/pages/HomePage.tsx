// LOKASI FILE: client/src/pages/HomePage.tsx

import { useState } from 'react';
import { Bell, Home, User, Eye, MapPin, Calendar, TrendingUp, AlertTriangle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import type { FC } from 'react'; // Impor FC (Functional Component) dari React

// --- DEFINISI TIPE DATA (BAGIAN PENTING) ---

// Tipe untuk MetricCard
interface MetricCardProps {
  title: string;
  value: string;
  subtitle: string; // Menambahkan subtitle agar tidak error
  bgColor: string;
  textColor?: string; // Tanda tanya (?) berarti properti ini tidak wajib
}

// Tipe untuk InfoCard
interface InfoCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ElementType; // Tipe data untuk komponen ikon
}

// Tipe untuk NotificationItem
interface NotificationItemProps {
  icon: React.ElementType;
  title: string;
  message: string;
  bgColor?: string;
}

// Tipe untuk BottomNavItem
interface BottomNavItemProps {
  icon: React.ElementType;
  label: string;
  isActive: boolean;
  onClick: () => void; // Tipe data untuk fungsi klik
}

// --- KOMPONEN-KOMPONEN DENGAN TIPE DATA YANG JELAS ---

const MetricCard: FC<MetricCardProps> = ({ title, value, subtitle, bgColor, textColor = "text-white" }) => (
  <div className={`${bgColor} rounded-2xl p-4 shadow-lg text-left`}>
    <div className={`text-sm opacity-90 ${textColor} mb-1`}>{title}</div>
    <div className={`text-2xl font-bold ${textColor} mb-1`}>{value}</div>
    <div className={`text-xs opacity-80 ${textColor}`}>{subtitle}</div>
  </div>
);

const InfoCard: FC<InfoCardProps> = ({ title, value, subtitle, icon: Icon }) => (
  <div className="bg-white rounded-2xl p-4 shadow-lg">
    <div className="flex items-center justify-between mb-2">
      <div className="text-gray-700 font-medium">{title}</div>
      {Icon && <Icon className="w-5 h-5 text-orange-500" />}
    </div>
    <div className="text-2xl font-bold text-gray-800 mb-1">{value}</div>
    <div className="text-sm text-gray-500">{subtitle}</div>
  </div>
);

const NotificationItem: FC<NotificationItemProps> = ({ icon: Icon, title, message, bgColor = "bg-yellow-100" }) => (
    <div className={`${bgColor} rounded-lg p-3 mb-3`}>
      <div className="flex items-start space-x-3">
        <div className="bg-yellow-500 rounded-full p-2">
          <Icon className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1">
          <div className="font-medium text-gray-800 text-sm">{title}</div>
          <div className="text-gray-600 text-xs mt-1">{message}</div>
        </div>
      </div>
    </div>
  );

const BottomNavItem: FC<BottomNavItemProps> = ({ icon: Icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center p-3 rounded-xl transition-colors ${
      isActive ? 'bg-orange-100 text-orange-500' : 'text-gray-400'
    }`}
  >
    <Icon className="w-6 h-6 mb-1" />
    <span className="text-xs font-medium">{label}</span>
  </button>
);

// --- KOMPONEN UTAMA HALAMAN ---

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('home');

  const productionData = [
    { month: 'Nov 23', totalTelur: 30000, mutu1: 28000, mutu2: 31000, mutu3: 29000 },
    { month: '24', totalTelur: 32000, mutu1: 29000, mutu2: 32000, mutu3: 30000 },
    { month: '25', totalTelur: 35000, mutu1: 30000, mutu2: 33000, mutu3: 31000 },
    { month: '26', totalTelur: 38000, mutu1: 32000, mutu2: 35000, mutu3: 33000 },
    { month: '27', totalTelur: 41000, mutu1: 34000, mutu2: 37000, mutu3: 35000 },
    { month: '28', totalTelur: 44000, mutu1: 36000, mutu2: 39000, mutu3: 37000 },
    { month: '29', totalTelur: 46000, mutu1: 38000, mutu2: 41000, mutu3: 39000 },
    { month: '30', totalTelur: 48000, mutu1: 40000, mutu2: 43000, mutu3: 41000 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto relative">
      {/* Header */}
      <div className="bg-white px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🥚</span>
                </div>
                <div>
                    <div className="font-bold text-gray-800 text-lg">Eggcelent</div>
                    <div className="text-sm text-gray-500">Peternak</div>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <Home className="w-6 h-6 text-gray-500" />
                <Bell className="w-6 h-6 text-gray-500" />
                <div className="w-8 h-8 bg-gray-200 rounded-full">
                    {/* Placeholder for user image */}
                </div>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 pb-24">
        {/* Top Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <MetricCard
            title="Total Telur Hari Ini"
            value="24.000"
            subtitle="" // subtitle wajib ada, kita isi string kosong
            bgColor="bg-yellow-400"
          />
          <MetricCard
            title="Mutu I [Premium]"
            value="920"
            subtitle=""
            bgColor="bg-yellow-500"
          />
          <MetricCard
            title="Prediksi Heat Stress"
            value="Sedang"
            subtitle=""
            bgColor="bg-orange-400"
          />
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <InfoCard
            title="Harga Rata-Rata"
            value="Rp 2.150"
            subtitle="+5% dari kemarin"
            icon={TrendingUp}
          />
          <InfoCard
            title="Peningkatan Kualitas"
            value="5,12%"
            subtitle="+0.98% dari kemarin"
            icon={TrendingUp}
          />
        </div>

        {/* Production Chart */}
        <div className="bg-white rounded-2xl p-4 shadow-lg mb-6">
          <h3 className="font-bold text-gray-800 mb-4">Produksi Telur Tiap Bulan</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={productionData}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                <YAxis hide />
                <Line type="monotone" dataKey="totalTelur" stroke="#3B82F6" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="mutu1" stroke="#10B981" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="mutu2" stroke="#F59E0B" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="mutu3" stroke="#EF4444" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-2xl p-4 shadow-lg">
            <h3 className="font-bold text-gray-800 mb-4">Notifikasi Terbaru</h3>
            <NotificationItem
                icon={AlertTriangle}
                title="Peringatan Heat Stress"
                message="Suhu akan mencapai 32°C besok, pastikan ventilasi kandang cukup!"
            />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2">
        <div className="flex justify-around">
            {/* Nav items here */}
        </div>
      </div>
    </div>
  );
};