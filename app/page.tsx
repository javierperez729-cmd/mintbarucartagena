export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Mint Barú Cartagena</h1>
      <p>Luxury stays & experiences in Barú, Cartagena.</p>

      <section style={{ marginTop: "24px" }}>
        <h2>Coming Soon</h2>
        <ul>
          <li>🌴 Boutique accommodations</li>
          <li>🏖️ Beachfront experiences</li>
          <li>📅 Online reservations</li>
        </ul>
      </section>

      <section style={{ marginTop: "24px" }}>
        <p>
          Contact us:{" "}
          <a href="mailto:info@mintbarucartagena.com">
            info@mintbarucartagena.com
          </a>
        </p>
      </section>
    </main>
  );
}
