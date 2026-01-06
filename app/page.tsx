import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-neutral-900">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Barú Beach"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-light tracking-wide text-white">
            Mint Barú
          </h1>
          <p className="mt-4 text-white/90 text-lg md:text-xl">
            Boutique luxury in Barú, Cartagena
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-light mb-6">A Private Caribbean Escape</h2>
        <p className="text-neutral-600 leading-relaxed">
          Mint Barú is a refined coastal retreat designed for guests seeking
          calm, beauty, and connection with nature. Thoughtfully curated spaces,
          personalized service, and effortless luxury.
        </p>
      </section>

      {/* EXPERIENCES */}
      <section className="bg-neutral-100 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            "Beachfront Stays",
            "Private Experiences",
            "Curated Gastronomy",
          ].map((item) => (
            <div key={item} className="text-center">
              <h3 className="text-xl font-light mb-3">{item}</h3>
              <p className="text-neutral-600 text-sm">
                Designed with simplicity, comfort, and elegance in mind.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-light mb-6">Opening Soon</h2>
        <p className="text-neutral-600 mb-8">
          Be the first to experience Mint Barú.
        </p>
        <a
          href="mailto:info@mintbarucartagena.com"
          className="inline-block border border-neutral-900 px-8 py-3 text-sm tracking-wide hover:bg-neutral-900 hover:text-white transition"
        >
          Contact Us
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Mint Barú Cartagena
      </footer>
    </main>
  );
}
