export default function BookingPage() {
  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh", padding: "40px" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Book a Table
      </h1>

      <p style={{ marginBottom: "2rem", opacity: 0.8 }}>
        Reserve your experience at Mint Barú Cartagena
      </p>

      <form style={{ maxWidth: "400px" }}>
        <input
          placeholder="Your name"
          style={inputStyle}
        />
        <input
          placeholder="WhatsApp number"
          style={inputStyle}
        />
        <input
          type="date"
          style={inputStyle}
        />
        <input
          placeholder="Number of guests"
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            width: "100%",
            background: "white",
            color: "black",
            border: "none",
            marginTop: "12px",
            cursor: "pointer",
          }}
        >
          Request Reservation
        </button>
      </form>
    </main>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  background: "#111",
  border: "1px solid #333",
  color: "white",
};

