import React from "react";

export default function Overlay() {
  return (
    <div className="relative w-full h-screen bg-black text-white font-mono overflow-hidden">
      {/* Stream Title Banner */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-zinc-900 border border-pink-500 px-6 py-2 text-lg tracking-wider animate-pulse">
        WEB3 MATTERS: LIVE TRANSMISSION
      </div>

      {/* Camera Frame */}
      <div className="absolute bottom-4 left-4 w-80 h-60 border-4 border-green-500 rounded-xl bg-zinc-800/80 flex items-center justify-center">
        <span className="text-sm opacity-70">[CAM FEED HERE]</span>
      </div>

      {/* Chat Window Frame */}
      <div className="absolute top-20 right-4 w-80 h-96 border-2 border-blue-400 bg-zinc-800/70 p-2 overflow-y-auto">
        <div className="mb-2 font-bold text-blue-300 border-b border-blue-400 pb-1">
          TRANSMISSION FEED — ALLIANCE COMMS
        </div>
        <div className="text-xs space-y-1">
          <p>&gt; 0xSummoner69: lfg 🚀</p>
          <p>&gt; CryptoKnight: alpha leak incoming</p>
          <p>&gt; PixelNomad: vibing hard rn</p>
        </div>
      </div>

      {/* Stats Ticker */}
      <div className="absolute bottom-0 left-0 w-full bg-zinc-900 text-green-400 text-xs px-4 py-1 whitespace-nowrap animate-marquee overflow-hidden">
        <div className="inline-block mr-12">
          ▶ New Follower: 0xSummoner69
        </div>
        <div className="inline-block mr-12">
          ▶ $DFK Pull Hit: +241% Gain
        </div>
        <div className="inline-block">
          ▶ Current Mission: Build Public, Die Mythical
        </div>
      </div>

      {/* Logo Badge */}
      <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center animate-ping-once">
        <span className="text-2xl font-bold">Ξ</span>
      </div>

      {/* Optional Quest Log Popout */}
      <div className="absolute left-4 top-24 w-64 bg-zinc-800/80 border border-yellow-400 p-3 text-sm">
        <div className="font-bold text-yellow-300 mb-2">QUEST LOG</div>
        <ul className="list-disc pl-4 space-y-1">
          <li>Extract alpha from DeFi dungeons</li>
          <li>Engage chat in 3 ritual emotes</li>
          <li>Reach 100 concurrent mystics</li>
        </ul>
      </div>
    </div>
  );
}
