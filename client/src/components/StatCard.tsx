// LOKASI FILE: client/src/components/StatCard.tsx
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Wajib untuk styling skeleton
import { motion } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: string | number;
  delta?: string;
  isLoading: boolean;
}

export default function StatCard({ label, value, delta, isLoading }: StatCardProps) {
  if (isLoading) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <Skeleton width={100} />
        <Skeleton height={30} width={150} className="mt-2" />
        <Skeleton width={80} className="mt-1" />
      </div>
    );
  }

  const deltaColor = delta?.startsWith('+') ? 'text-green-500' : 'text-red-500';

  return (
    <motion.div
      className="bg-white p-4 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
      {delta && <p className={`text-xs font-semibold ${deltaColor}`}>{delta}</p>}
    </motion.div>
  );
}