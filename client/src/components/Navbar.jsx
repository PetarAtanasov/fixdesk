import "../styles/navbar.css";

export default function Navbar({ lang, setLang }) {
  return (
    <nav className="nav">
      
      <div className="logo">⚡ FixDesk</div>

      <div className="links">
        <a>{lang === "EN" ? "About" : "Über uns"}</a>
        <a>{lang === "EN" ? "Pricing" : "Preise"}</a>
        <a>{lang === "EN" ? "Mission" : "Ziel"}</a>
        <a>{lang === "EN" ? "Contact" : "Kontakt"}</a>
      </div>

      <div className="right">
        <button
          className="lang"
          onClick={() => setLang(lang === "EN" ? "DE" : "EN")}
        >
          {lang}
        </button>

        <button className="login">
          {lang === "EN" ? "Login" : "Anmelden"}
        </button>
      </div>

    </nav>
  );
}