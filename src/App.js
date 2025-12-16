import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./components/productCard";

const App = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response, "response");
      setProducts(response.data ?? []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
        />
      ))}
    </div>
  );
};

export default App;
