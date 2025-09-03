import Header from '../components/Header/Header';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import Footer from '../components/Footer/Footer';

function Detail() {
  return (
    <>
      <div className="app">
        <Header />
        <main>
          <ProductDetail />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Detail;
