"use client"
import Image from "next/image";
import { useState } from "react";
import Connector from "./Connector";




export default function Home() {

  const [theConnector, setTheconnector] = useState<boolean>(false);

  const toGo = () =>{
    setTheconnector(!theConnector)
  }

  return (
    <>

    {theConnector ? <Connector/>
    : <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <div className="text-2xl font-bold flex items-center gap-2">
          <Image
              src="/flare_secondary_logo.svg"
              alt="Flare Logo"
              width={100}
              height={100}
          />
        </div>
        <button onClick={toGo} className="border border-black px-4 py-1 rounded-full hover:bg-black hover:text-white transition">
          Connect to Wallet
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-lg text-center">
          <h1 className="text-2xl font-semibold mb-4">Welcome to the Flare portal!</h1>
          <div className="bg-black text-white rounded-xl p-6 mb-4">
            <p className="mb-4">
              Here, you can manage both Songbird (SGB) and Flare (FLR) network tokens, wrap and delegate them to
              FTSO data providers and thereby contribute to the networks&apos; decentralization and stability.
              You can also participate in governance voting from this portal.
            </p>
            <p>
              Please start by clicking on the ‘Connect to Wallet’ button, select your wallet and follow the
              instructions. This page is compatible for both desktop and mobile browsers. For technical support,
              please make a request in the General room on our <a href="#" className="text-pink-400 underline">Discord</a>
              {' '}or our <a href="#" className="text-pink-400 underline">Telegram</a>.
            </p>
          </div>
        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md flex justify-around items-center py-2">
        <button className="flex flex-col items-center text-xs">
          <span className="text-xl">👤</span>
          Account
        </button>
        <button className="flex flex-col items-center text-xs">
          <span className="text-xl">🪙</span>
          Staking
        </button>
        <button className="flex flex-col items-center text-xs">
          <span className="text-xl">💵</span>
          USDT0
        </button>
        <button className="flex flex-col items-center text-xs">
          <span className="text-xl">🗳️</span>
          Voting
        </button>
        <button className="flex flex-col items-center text-xs">
          <span className="text-xl">📁</span>
          Manage
        </button>
        <button onClick={toGo} className="flex flex-col items-center text-xs">
          <span className="text-xl">🔌</span>
          Connection
        </button>
        <button className="flex flex-col items-center text-xs text-pink-500">
          <span className="text-xl">🌀</span>
          Network
        </button>
      </nav>
    </div> 
}
    </>

  );
}
