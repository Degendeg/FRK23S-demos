import './App.css'

function App() {
  return (
    <div>
      <h2>Lathund - från lokalt Git repo till GitHub</h2>
      <p><strong>Steg 1: Skapa ett lokalt Git-repo</strong></p>
      <p>Öppna terminalen och navigera till rootmappen för din React app.</p>
      <p>Kör följande kommandon i terminalen:</p>
      <code>
        git init <br />
        git add . <br />
        git commit -m "Initial commit"
      </code>

      <div className="wrapper">
        <p><strong>OBS</strong>: Ni kan ta en befintlig applikation och göra detta, ni behöver inte köra nedanstående för att det ska fungera.</p>
        <code>
          npm create vite@latest
        </code>
      </div>

      <p><strong>Steg 2: Skapa ett GitHub-repo</strong></p>
      <p>Gå till GitHub och logga in på ditt konto.</p>
      <p>Klicka på "+"-ikonen i övre högra hörnet och välj "New repository".</p>
      <p>Ange namnet på ditt nya repository, lägg till en beskrivning om du vill, och välj om det ska vara offentligt eller privat.</p>
      <p>Klicka på "Create repository".</p>

      <p><strong>Steg 3: Koppla det lokala Git-repositoriet till GitHub</strong></p>
      <p>Kopiera URL:en till ditt GitHub-repositorium.</p>
      <p>I terminalen, kör följande kommando för att lägga till din GitHub-URL som en "remote" i ditt lokala Git-repo:</p>
      <code>git remote add origin &lt;GitHub repository URL&gt;</code>
      <p>Tex: <code>git remote add origin https://github.com/Degendeg/my-react-app.git</code></p>
      <p>Kör följande för att sätta rätt branch:</p>
      <code>git branch -M main</code>
      <p>Kör följande för att pusha upp dina lokala ändringar till main branchen:</p>
      <code>git push -u origin main</code>
      <h1>✅ Nu finns din React app på GitHub!</h1>
    </div>
  );
}


export default App
