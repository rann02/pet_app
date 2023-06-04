import "./App.scss";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <nav className="navbar">
        <div>Logo</div>
        <div>
          <ul className="menu">
            <li>
              <a href="#home">Abaout Us</a>
            </li>
            <li>
              <a href="#news">Pet Listings</a>
            </li>
            <li>
              <a href="#contact">Help & Advice</a>
            </li>
            <li>
              <a href="#about">News</a>
            </li>
            <li>
              <a href="#about">Contact Us</a>
            </li>
          </ul>
        </div>
        <diV>
          <div>
            <input />
          </div>
          <div></div>
        </diV>
      </nav>
      <Home />
    </>
  );
}

export default App;
