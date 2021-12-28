import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <section id="description">
        <h2 className="text-center mt-3">Market All</h2>
        <div className="content-all d-flex mt-5 p-5 justify-content-evenly">
          <img src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" />
          <div id="text-description" class="p-3">
            <h4 className="text-center">Quem somos?</h4>
            <p>
              {" "}
              Somos a maior empresa do mundo a vender qualquer tipo de porcaria
            </p>
          </div>
        </div>
      </section>
      <section id="products" className="pb-3 pt-3 d-flex flex-column">
        <h3 className="text-center">Alguns de Nossos Produtos</h3>
        <div
          id="shelf-products"
          className="d-flex justify-content-evenly mt-3 w-100"
        >
          <Products/>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
