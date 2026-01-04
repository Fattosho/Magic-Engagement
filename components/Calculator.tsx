
import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';

const Calculator: React.FC = () => {
  const [sales, setSales] = useState(50);
  const [margin, setMargin] = useState(300);

  const totalProfit = sales * (margin / 100) * 15; // Adjusted logic for the SMM context

  return (
    <div className="glass-card p-8 rounded-3xl red-shadow max-w-xl mx-auto border-red-900/30">
      <div className="flex items-center gap-2 mb-6 text-red-600">
        <TrendingUp size={24} />
        <h3 className="text-xl font-bold uppercase tracking-wider">Calculadora de Lucro SMM</h3>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Pedidos por dia: {sales}</label>
          <input 
            type="range" 
            min="5" 
            max="500" 
            value={sales} 
            onChange={(e) => setSales(Number(e.target.value))}
            className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-red-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Margem de Lucro: {margin}%</label>
          <input 
            type="range" 
            min="100" 
            max="1500" 
            value={margin} 
            onChange={(e) => setMargin(Number(e.target.value))}
            className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-red-600"
          />
        </div>

        <div className="pt-6 border-t border-white/5 text-center">
          <p className="text-gray-400 text-sm uppercase mb-1 tracking-widest">Lucro Estimado Mensal</p>
          <p className="text-4xl md:text-5xl font-black gradient-text">
            R$ {totalProfit.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
          <p className="text-xs text-gray-500 mt-4 italic">Resultados baseados em média de revenda de seguidores e curtidas.</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
