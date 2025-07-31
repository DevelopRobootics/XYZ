import { FaLightbulb } from 'react-icons/fa';

export default function PricingCard({ title, price, priceColor = "#8B5CF6", features = [], savings = "" }) {
  return (
    <div className="flex flex-col justify-between bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 text-gray-800 dark:text-white">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        <p className="text-4xl font-bold text-black dark:text-white">
          <span style={{ color: priceColor }}>{price}</span>
          <span className="text-base font-medium">/mes</span>
        </p>
        {savings && (
          <p className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full inline-flex items-center gap-2 mb-4 font-medium">
            <FaLightbulb className="text-yellow-500" /> {savings}
          </p>
        )}
        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-blue-500">•</span> {feature}
            </li>
          ))}
        </ul>
      </div>

      <button className="mt-8 text-center bg-black dark:bg-white text-white dark:text-black rounded-full py-2 px-5 text-sm font-semibold hover:opacity-90 transition-opacity">
        Ver desglose
      </button>
    </div>
  );
}
