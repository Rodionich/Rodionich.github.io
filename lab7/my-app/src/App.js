import './App.css';
import Header from "./components/Header"
import Content from "./components/Content"
import Image from "./components/Image"
import GoodsCard from "./components/GoodsCard"
import productsData from "./components/products"

function App() {
  return (
    <div className='lab7'>
      <Header />
      <Content />
      <Image />
      <div className='goods_container'>
        {productsData.map(product => (
          <GoodsCard
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
