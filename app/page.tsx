export default function Home() {
  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <div>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Mint Barú Cartagena
        </h1>

<p style={{ marginBottom: "2rem", opacity: 0.8 }}>
  Luxury beach experience · Book Your Stay
</p>

        <div>
          <a
            href="/booking"
            style={{
              padding: "12px 24px",
              border: "1px solid white",
              textDecoration: "none",
              color: "white",
              marginRight: "12px",
              display: "inline-block",
            }}
          >
            Book Your Stay
          </a>

          <a
            href="/api/whatsapp"
            style={{
              padding: "12px 24px",
              border: "1px solid white",
              textDecoration: "none",
              color: "white",
              display: "inline-block",
            }}
          >
            WhatsApp Concierge
          </a>
        </div>
      </div>
    </main>
  );
}



