import { useState } from 'react';
import { X, User, Plus, ArrowUp, Users } from 'lucide-react';

const WalletInterface = () => {
  const [balance] = useState('84.00');
  const [address] = useState('UQBb67ehts8fu87fs655s7df6PVKt');

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Bitcoin watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[28rem] font-black leading-none" style={{ color: 'rgba(223, 255, 50, 0.03)' }}>₿</span>
      </div>

      {/* Main content */}
      <div className="w-full max-w-md relative z-10">
        {/* Header buttons */}
        <div className="flex justify-between items-center mb-12">
          <button
            className="w-14 h-14 rounded-full bg-[#DFFF32] flex items-center justify-center text-slate-900 transition-all active:scale-95 hover:shadow-[0_0_20px_rgba(223,255,50,0.6)]"
            aria-label="Close"
          >
            <X size={24} strokeWidth={2.5} />
          </button>
          <button
            className="w-14 h-14 rounded-full border-2 flex items-center justify-center text-[#DFFF32] transition-all active:scale-95 hover:shadow-[0_0_20px_rgba(223,255,50,0.4)]"
            style={{
              borderColor: 'rgba(223, 255, 50, 0.5)',
              backgroundColor: 'rgba(223, 255, 50, 0.05)'
            }}
            aria-label="Account"
          >
            <User size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Address */}
        <div className="text-center mb-8">
          <p className="text-sm font-medium tracking-wide" style={{ color: 'rgba(223, 255, 50, 0.7)' }}>
            My address is {address}
          </p>
        </div>

        {/* Balance */}
        <div className="text-center mb-12">
          <h1
            className="text-7xl font-light text-[#DFFF32] tracking-tight"
            style={{ textShadow: '0 0 50px rgba(223, 255, 50, 0.4), 0 0 80px rgba(223, 255, 50, 0.2)' }}
          >
            ${balance}
          </h1>
        </div>

        {/* Action buttons */}
        <div className="space-y-4">
          {/* Deposit button - full width */}
          <button
            className="w-full rounded-3xl backdrop-blur-sm p-6 flex flex-col items-center justify-center gap-3 transition-all duration-500 active:scale-[0.98] group"
            style={{
              border: '1px solid rgba(223, 255, 50, 0.3)',
              backgroundColor: 'rgba(15, 23, 42, 0.4)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 40px rgba(223, 255, 50, 0.6), 0 0 80px rgba(223, 255, 50, 0.3)';
              e.currentTarget.style.borderColor = '#DFFF32';
              e.currentTarget.style.backgroundColor = '#DFFF32';
              const icon = e.currentTarget.querySelector('.icon-container') as HTMLElement;
              const text = e.currentTarget.querySelector('.button-text') as HTMLElement;
              if (icon) icon.style.color = '#0f172a';
              if (text) text.style.color = '#0f172a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(223, 255, 50, 0.3)';
              e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.4)';
              const icon = e.currentTarget.querySelector('.icon-container') as HTMLElement;
              const text = e.currentTarget.querySelector('.button-text') as HTMLElement;
              if (icon) icon.style.color = '#DFFF32';
              if (text) text.style.color = '#DFFF32';
            }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-[#DFFF32] icon-container transition-colors duration-500" style={{ backgroundColor: 'rgba(223, 255, 50, 0.1)' }}>
              <Plus size={28} strokeWidth={2.5} />
            </div>
            <span className="text-lg font-semibold text-[#DFFF32] button-text transition-colors duration-500">Deposit</span>
          </button>

          {/* Withdraw and P2P buttons - side by side */}
          <div className="grid grid-cols-2 gap-4">
            <button
              className="rounded-3xl backdrop-blur-sm p-6 flex flex-col items-center justify-center gap-3 transition-all duration-500 active:scale-[0.98] group"
              style={{
                border: '1px solid rgba(223, 255, 50, 0.3)',
                backgroundColor: 'rgba(15, 23, 42, 0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 40px rgba(223, 255, 50, 0.6), 0 0 80px rgba(223, 255, 50, 0.3)';
                e.currentTarget.style.borderColor = '#DFFF32';
                e.currentTarget.style.backgroundColor = '#DFFF32';
                const icon = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                const text = e.currentTarget.querySelector('.button-text') as HTMLElement;
                if (icon) icon.style.color = '#0f172a';
                if (text) text.style.color = '#0f172a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(223, 255, 50, 0.3)';
                e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.4)';
                const icon = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                const text = e.currentTarget.querySelector('.button-text') as HTMLElement;
                if (icon) icon.style.color = '#DFFF32';
                if (text) text.style.color = '#DFFF32';
              }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-[#DFFF32] icon-container transition-colors duration-500" style={{ backgroundColor: 'rgba(223, 255, 50, 0.1)' }}>
                <ArrowUp size={28} strokeWidth={2.5} />
              </div>
              <span className="text-lg font-semibold text-[#DFFF32] button-text transition-colors duration-500">Withdraw</span>
            </button>

            <button
              className="rounded-3xl backdrop-blur-sm p-6 flex flex-col items-center justify-center gap-3 transition-all duration-500 active:scale-[0.98] group"
              style={{
                border: '1px solid rgba(223, 255, 50, 0.3)',
                backgroundColor: 'rgba(15, 23, 42, 0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 40px rgba(223, 255, 50, 0.6), 0 0 80px rgba(223, 255, 50, 0.3)';
                e.currentTarget.style.borderColor = '#DFFF32';
                e.currentTarget.style.backgroundColor = '#DFFF32';
                const icon = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                const text = e.currentTarget.querySelector('.button-text') as HTMLElement;
                if (icon) icon.style.color = '#0f172a';
                if (text) text.style.color = '#0f172a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(223, 255, 50, 0.3)';
                e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.4)';
                const icon = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                const text = e.currentTarget.querySelector('.button-text') as HTMLElement;
                if (icon) icon.style.color = '#DFFF32';
                if (text) text.style.color = '#DFFF32';
              }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-[#DFFF32] icon-container transition-colors duration-500" style={{ backgroundColor: 'rgba(223, 255, 50, 0.1)' }}>
                <Users size={28} strokeWidth={2.5} />
              </div>
              <span className="text-lg font-semibold text-[#DFFF32] button-text transition-colors duration-500">P2P</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletInterface;
