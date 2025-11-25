import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '../components/ui/Card';

const data = [
  { time: '18:00', visibility: 30, lightPollution: 40 },
  { time: '20:00', visibility: 60, lightPollution: 20 },
  { time: '22:00', visibility: 90, lightPollution: 5 },
  { time: '00:00', visibility: 98, lightPollution: 0 },
  { time: '02:00', visibility: 95, lightPollution: 0 },
  { time: '04:00', visibility: 85, lightPollution: 10 },
  { time: '06:00', visibility: 40, lightPollution: 50 },
];

export const Observatory: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen pb-12 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Observatory Conditions</h1>
          <p className="text-slate-400">Real-time forecast for stargazing quality in the valley.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart */}
          <div className="lg:col-span-2">
            <Card className="h-[400px] w-full p-6">
              <h3 className="text-lg font-bold text-white mb-6">Tonight's Visibility Forecast (%)</h3>
              <ResponsiveContainer width="100%" height="85%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorVis" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#818cf8" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#818cf8" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="time" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: '#f8fafc' }}
                    itemStyle={{ color: '#818cf8' }}
                  />
                  <Area type="monotone" dataKey="visibility" stroke="#818cf8" fillOpacity={1} fill="url(#colorVis)" />
                </AreaChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Side Info */}
          <div className="space-y-8">
            <Card>
              <h3 className="text-lg font-bold text-white mb-4">Current Conditions</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Moon Phase</span>
                  <span className="text-white">Waning Crescent (12%)</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Cloud Cover</span>
                  <span className="text-emerald-400">0% (Clear)</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Temperature</span>
                  <span className="text-white">8°C / 46°F</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-slate-400">Seeing Index</span>
                  <span className="text-indigo-400">5/5 (Perfect)</span>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-900/50 to-slate-900/50">
              <h3 className="text-lg font-bold text-white mb-2">Astronomer's Note</h3>
              <p className="text-slate-300 text-sm italic">
                "Tonight is optimal for viewing the Andromeda Galaxy. We recommend the 00:00 viewing slot for maximum darkness."
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};