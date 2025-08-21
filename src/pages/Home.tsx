import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import ProductsHome from '../components/Products/ProductsHome';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <ProductsHome />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
