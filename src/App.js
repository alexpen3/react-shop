import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Shop } from "./components/Shop";

function App() {
  return (
    <>
      <Header />
      <div className="page">
        <Shop />
      </div>
      <Footer />
    </>
  );
}

export default App;
