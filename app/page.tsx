export default function Home() {
  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
      <div>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Mint Barú Cartagena
        </h1>
        <p style={{ marginBottom: "2rem", opacity: 0.8 }}>
          Luxury beachfront dining & cocktails
        </p>

        <a
          href="/booking"
          style={{
            padding: "12px 24px",
            border: "1px solid white",
            textDecoration: "none",
            color: "white",
            marginRight: "12px",
          }}
        >
          Book a Table
        </a>

        <a
          href="/api/whatsapp"
          style={{
            padding: "12px 24px",
            border: "1px solid white",
            textDecoration: "none",
            color: "white",
          }}
        >
          WhatsApp Concierge
        </a>
      </div>
    </main>
  );
}


