import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F7F6F3] text-[#1C1C1C] font-sans">
      {/* HERO */}
      <section className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1540202404-1b927e27fa8b"
          alt="Barú beach"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-5xl md:text-7xl text-white tracking-wide font-serif">
              Mint Barú
            </h1>
            <p className="mt-4 text-white/90 text-lg md:text-xl">
              Boutique luxury in Barú, Cartagena
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl mb-6 font-serif">Caribbean Serenity</h2>
        <p className="text-[#6B6B6B] leading-relaxed">
          Nestled along the untouched shores of Barú, Mint Barú offers an intimate escape
          defined by natural beauty, understated luxury, and personalized experiences.
        </p>
      </section>

      {/* IMAGE GRID */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {[
          "photo-1501785888041-af3ef285b470",
          "photo-1500530855697-b586d89ba3ee",
          "photo-1507525428034-b723cf961d3e",
        ].map((id) => (
          <div key={id} className="relative h-80">
            <Image
              src={`https://images.unsplash.com/${id}`}
              alt="Mint Barú experience"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </section>

      {/* EXPERIENCES */}
      <section className="py-24 text-center px-6">
        <h2 className="text-4xl mb-12 font-serif">The Experience</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            "Beachfront Living",
            "Private Moments",
            "Refined Simplicity",
          ].map((item) => (
            <div key={item}>
              <h3 className="text-xl mb-3 font-serif">{item}</h3>
              <p className="text-[#6B6B6B] text-sm">
                Every detail is curated to create effortless comfort and calm.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-white">
        <h2 className="text-4xl mb-6 font-serif">Opening Soon</h2>
        <p className="text-[#6B6B6B] mb-10">
          Discover a new standard of coastal luxury.
        </p>
        <a
          href="mailto:info@mintbarucartagena.com"
          className="inline-block border border-[#1C1C1C] px-10 py-4 tracking-wide hover:bg-[#1C1C1C] hover:text-white transition"
        >
          Contact Us
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-[#6B6B6B]">
        © {new Date().getFullYear()} Mint Barú Cartagena
      </footer>
    </main>
  );
}
