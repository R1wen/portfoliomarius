export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
            BASSAH DOTSE K. Marius
          </h1>
          <h2 className="text-4xl md:text-6xl font-light tracking-wide mb-8">
            PORTFOLIO
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Consultant international en stratégie,
          </p>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Communication et développement
          </p>
          <div className="flex gap-4 justify-center text-sm text-gray-500">
            <span className="px-3 py-1 border border-blue-600 text-blue-600 rounded">Leadership</span>
            <span className="px-3 py-1 border border-gray-300 rounded">Vision</span>
            <span className="px-3 py-1 border border-gray-300 rounded">Impact</span>
          </div>
        </div>
      </div>
    </section>
  );
};