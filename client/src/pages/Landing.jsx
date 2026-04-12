import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Landing() {
  const [lang, setLang] = useState("EN");

  return (
    <div style={{ color: "white", background: "#0f172a", minHeight: "100vh" }}>
      
      <Navbar lang={lang} setLang={setLang} />

      <div style={{ textAlign: "center", padding: "100px 20px" }}>
        <h1>Dev Ticket System</h1>
        <p>Manage development tickets like a real team</p>
      </div>

    </div>
  );
}