import Clean from "./components/clean/Clean";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Popular from "./components/popular/Popular";
import Product from "./components/product/Product";
import Test from "./components/test/Test";

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Product />
                <Clean />
                <Test />
                <Popular />
            </main>
            <Footer />
        </>
    );
}

export default App;
