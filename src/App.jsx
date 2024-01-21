import Footer from "./Components/footer/Footer";
import Home from "./Components/home/Home";
import ScrollBottomTop from "./Components/shared/ScrollBottomTop";
import GlobalContextProvider from "./Context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <Home />

      <div className="container">
        <Footer />
      </div>

      <ScrollBottomTop />
    </GlobalContextProvider>
  );
}

export default App;
