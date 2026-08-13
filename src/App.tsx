import React, { useState } from 'react';

// Authentic high-resolution Vincent van Gogh masterpiece image sources with automatic fallback sequence
const BG_SOURCES = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1920px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/1920px-Starry_Night_Over_the_Rhone.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Caf%C3%A9_Terrace_at_Night_%28F467%29.jpg/1920px-Vincent_van_Gogh_-_Caf%C3%A9_Terrace_at_Night_%28F467%29.jpg',
  'https://commons.wikimedia.org/wiki/Special:FilePath/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg?width=1600',
  'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=2500&auto=format&fit=crop'
];

export default function App() {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    if (sourceIndex < BG_SOURCES.length - 1) {
      setSourceIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center font-serif select-none bg-gradient-to-br from-[#06102b] via-[#0f2852] to-[#040c1f]">
      {/* Background Painting Image */}
      {sourceIndex < BG_SOURCES.length && (
        <img
          key={BG_SOURCES[sourceIndex]}
          src={BG_SOURCES[sourceIndex]}
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
          onLoad={() => setImageLoaded(true)}
          onError={handleImageError}
          alt="Fondo Noche Estrellada - Van Gogh"
          className={`absolute inset-0 w-full h-full object-cover object-center scale-105 transition-opacity duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Subtle overlay to enhance contrast */}
      <div className="absolute inset-0 bg-blue-950/20 pointer-events-none" />

      {/* Central Card */}
      <main className="relative z-10 bg-[#fafaf5]/95 backdrop-blur-md px-8 py-12 sm:px-14 sm:py-16 md:px-20 md:py-20 rounded-2xl shadow-2xl max-w-3xl w-[92%] sm:w-[85%] md:w-[720px] text-center border border-black/5 flex flex-col items-center my-auto transition-all duration-300">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#00113a] tracking-tight leading-tight">
          Notaría Fontecilla
        </h1>

        <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#3a4560] mt-6 sm:mt-7 max-w-xl leading-relaxed font-normal">
          Segunda Notaría de Puerto Varas con oficio en Llanquihue
        </p>

        <p className="font-serif text-base sm:text-lg md:text-xl text-[#525763] font-normal mt-2">
          Vicente Perez Rosales 213, Llanquihue
        </p>

        <div className="h-[1px] w-28 sm:w-36 bg-[#00113a]/25 my-6 sm:my-8" />

        <div className="flex flex-col gap-1">
          <p className="font-serif text-base sm:text-lg text-[#525763] font-normal">
            Notario
          </p>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#1a1c19] font-medium tracking-wide">
            Ricardo Fontecilla Gallardo
          </p>
        </div>
      </main>
    </div>
  );
}
