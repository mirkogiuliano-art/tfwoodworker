import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductsHome from '../components/ProductsHome';
import Footer from '../components/Footer';

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
