import React from 'react';
import { SnakeGame } from './components/SnakeGame';
import { MusicPlayer } from './components/MusicPlayer';
import { Zap } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-neon-pink selection:text-white pb-24 font-sans">
      
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-neon-purple rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-blue rounded-full blur-[180px] opacity-10"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-neon-green rounded-full blur-[150px] opacity-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center">
        
        {/* Header */}
        <header className="w-full flex justify-between items-center mb-8 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-tr from-neon-blue to-neon-purple rounded-lg shadow-neon-blue">
              <Zap className="text-white w-6 h-6 fill-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-mono">
              RETRO<span className="text-neon-blue">.EXE</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs font-mono text-gray-500">
            <span>SYS.STATUS: ONLINE</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </div>
        </header>

        {/* Game Area */}
        <main className="w-full flex-grow flex items-center justify-center">
          <SnakeGame />
        </main>
        
        {/* Footer info (above player) */}
        <div className="mt-8 text-center text-slate-600 text-xs font-mono max-w-md">
          <p>AI SIMULATION ACTIVE // AUDIO ENGINE V1.0</p>
          <p>USE ARROW KEYS OR WASD TO NAVIGATE THE GRID.</p>
        </div>

      </div>

      {/* Music Player Overlay */}
      <MusicPlayer />
    </div>
  );
};

export default App;
