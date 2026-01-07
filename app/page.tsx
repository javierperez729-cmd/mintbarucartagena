import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F7F6F3] text-[#1C1C1C]">
      <section className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1540202404-1b927e27fa8b"
          alt="Barú beach"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-5xl md:text-7xl font-serif text-white tracking-wide">Mint Barú</h1>
            <p className="mt-4 text-white/90 text-lg md:text-xl">Boutique luxury in Barú, Cartagena</p>
            <a href="/booking" className="mt-8 inline-block border border-white px-8 py-3 text-white">Reserve Now</a>
          </div>
        </div>
      </section>
    </main>
  );
}

