import { MainRoutes } from "./AllRoutes/MainRoutes";
import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  const newFont = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Lexend:wght@400;500;600;700;800&family=Outfit:wght@400;600;800&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">`;
  return (
    <div style={{ fontFamily: "Poppins" }}>
      <div dangerouslySetInnerHTML={{ __html: newFont }}></div>
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
