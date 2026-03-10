"use client";

export default function BrownieVideoSection() {
  return (
    <section className="relative w-full h-[70vh] lg:h-[85vh] overflow-hidden bg-black">
      {/* VIDEO */}
      <video
        className="absolute w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/images/brown.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 tracking-wide">
          Sizzling Brownie
        </h2>

        <p className="text-gray-200 max-w-xl text-sm md:text-lg mb-8">
          Experience the rich aroma of hot chocolate brownie served on a
          sizzling plate with melting vanilla ice cream.
        </p>

        <button className="bg-[#8B4513] hover:bg-[#6b2f1a] text-white px-8 py-3 rounded-full transition duration-300">
          Order Now
        </button>
      </div>
    </section>
  );
}
