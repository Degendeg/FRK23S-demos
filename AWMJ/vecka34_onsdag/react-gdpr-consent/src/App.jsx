import React, { useEffect, useState } from 'react';
import CookieConsent, { Cookies, getCookieConsentValue, resetCookieConsentValue } from 'react-cookie-consent';
import { ReactTyped } from 'react-typed';
import './App.css';

function App() {
  // Skapa en state-variabel för att hålla reda på användarens samtycke
  const [consent, setConsent] = useState(getCookieConsentValue("cookie_consent") === "true");
  const [showPolicy, setShowPolicy] = useState(null);

  useEffect(() => {
    // Funktion för att hantera förändringar i cookie-samtycke
    const handleConsentChange = () => {
      setConsent(getCookieConsentValue("cookie_consent") === "true");
    };

    // Lägg till en eventlyssnare för att övervaka förändringar i cookie-samtycke
    window.addEventListener("cookieConsentChange", handleConsentChange);

    // Ta bort eventlyssnaren när komponenten unmountas
    return () => {
      window.removeEventListener("cookieConsentChange", handleConsentChange);
    };
  }, []);

  // Funktion för att hantera godkännande av cookies
  const handleAcceptCookies = () => {
    Cookies.set("cookie_consent", "true", { expires: 150 });
    window.dispatchEvent(new Event("cookieConsentChange"));
  };

  // Funktion för att hantera tillbakadragande av samtycke
  const handleWithdrawConsent = () => {
    resetCookieConsentValue("cookie_consent");
    window.dispatchEvent(new Event("cookieConsentChange"));
  };

  const showIntegrityPolicy = () => {
    setShowPolicy(!showPolicy);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>GDPR och Cookie Consent Demo</h1>
        <p>
          <ReactTyped
            strings={["Välkommen till vår webbplats. Vi värnar om din integritet och följer GDPR (General Data Protection Regulation) riktlinjerna."]}
            typeSpeed={40}
          />
        </p>
        <section className="gdpr-info">
          <h2>GDPR och Webbutveckling</h2>
          <p style={{ color: 'white' }}>
            GDPR är en förordning som syftar till att skydda individers personuppgifter inom EU.
            För utvecklare innebär detta att man måste vara transparent med hur man samlar in, använder och lagrar användardata.
            Användare måste också ges möjlighet att samtycka till datainsamling och ha rätt att dra tillbaka sitt samtycke när som helst.
          </p>
        </section>
        {consent && <button onClick={handleWithdrawConsent}>Dra tillbaka samtycke</button>}
        {showPolicy && (
          <section className="policy">
            <h2>Integritetspolicy</h2>
            <p>
              Löksås ipsum kanske om vemod tiden gör sin ska, sällan blev dimma så tiden miljoner tre,
              vemod vid äng blev både stora sorgliga. Göras lax redan genom häst ingalunda tid från björnbär verkligen,
              om redan om blivit del denna enligt därmed icke kanske, därmed samma nya vi del sig om varit.
              Vad vi oss icke för brunsås rot bäckasiner, kom sällan är åker dunge ska färdväg, bland kom vad denna själv kunde.
            </p>
            <p>
              Plats kan inom samtidigt hav när faktor stig, mot träutensilierna när enligt trevnadens vi från,
              ska mot ingalunda sax ingalunda det. Som annan som av vad samtidigt söka blev, rot sällan regn tid trevnadens själv dock,
              plats omfångsrik ordningens del göras år. Trevnadens hela bra om nu groda redan lax sin stora,
              sorgliga från ordningens räv på rot händer stig både vi, från sista ska kan hela flera.
            </p>
          </section>
        )}
      </header>
      {!consent && (
        <CookieConsent
          location="bottom"
          buttonText="Jag förstår"
          cookieName="cookie_consent"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
          onAccept={handleAcceptCookies}
          enableDeclineButton
          declineButtonText="Jag förstår inte"
        >
          Vi använder cookies för att förbättra din upplevelse på vår webbplats. Genom att fortsätta använda webbplatsen godkänner du vår användning av cookies.
          Läs mer om vår <a onClick={showIntegrityPolicy} style={{ color: "#FFD700", cursor: 'pointer' }}>integritetspolicy</a>.
        </CookieConsent>
      )}
    </div>
  );
}

export default App;
