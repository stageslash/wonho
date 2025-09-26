export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header with Logo */}
      <header className="p-5 sm:p-8 bg-black">
        <div className="text-left">
          <img
            src="/stageslash_logo.png"
            alt="Logo"
            className="w-[120px] sm:w-[180px] h-auto"
          />
        </div>
      </header>

      {/* Main Content - Centered */}
      <main className="flex-1 flex items-center justify-center px-5">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">COMING SOON</h1>
          {/* <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            2025 WONHO WORLD TOUR
            <br />
            &lt;STAY AWAKE&gt;: North America
          </p> */}
        </div>
      </main>
    </div>
  );
}
