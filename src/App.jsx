import { useEffect, useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Smartphone",
    oldPrice: "₹19,999",
    price: 15999,
    rating: "⭐⭐⭐⭐☆",
    image:
      "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/f29-series-in/f29/navigation/440-440-black-v2.png",
  },
  {
    id: 2,
    name: "Laptop",
    price: 45999,
    rating: "⭐⭐⭐⭐⭐",
    image:
      "https://img.global.news.samsung.com/in/wp-content/uploads/2024/07/Venus_EXT_16_UK_Gray_007_Top-L-Perspective-e1720170818626.jpg",
  },
  {
    id: 3,
    name: "Headphones",
    price: 1999,
    rating: "⭐⭐⭐⭐☆",
    image: "https://m.media-amazon.com/images/I/51rpbVmi9XL._SL1200_.jpg",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 2999,
    rating: "⭐⭐⭐⭐☆",
    image: "https://tse1.mm.bing.net/th/id/OIP.tW2THcHjVClz4akyleVEsgHaJY",
  },
];

function App() {
  const [count, setCount] = useState(Number(localStorage.getItem("count")) || 0);
  const [total, setTotal] = useState(Number(localStorage.getItem("total")) || 0);
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    localStorage.setItem("count", count);
    localStorage.setItem("total", total);
  }, [count, total]);

  const addCart = (price) => {
    setCount(count + 1);
    setTotal(total + price);
  };

  const checkout = () => {
    alert("Checkout Successful (Dummy) ✅");
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={dark ? "dark" : ""}>
      <div className="navbar">
        <div className="logo">amazon</div>
        <div className="location">📍 Deliver to Kanpur</div>

        <div className="search-box">
          <select>
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
          </select>

          <input
            type="text"
            placeholder="Search Amazon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button>🔍</button>
        </div>

        <div className="nav-links" onClick={() => setDark(!dark)}>
          🌙
        </div>

        <div className="nav-links">🛒 Cart ({count})</div>
      </div>

      <div className="hero"></div>

      <div className="products">
        {filteredProducts.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div className="rating">{product.rating}</div>

            {product.oldPrice && <p className="old">{product.oldPrice}</p>}

            <p className="price">₹{product.price}</p>

            <button className="btn cart-btn" onClick={() => addCart(product.price)}>
              Add to Cart
            </button>

            <button className="btn wish">❤️ Wishlist</button>
          </div>
        ))}
      </div>

      <div className="cart-box">
        <h2>🧾 Cart Summary</h2>
        <p>Total Items: {count}</p>
        <p>Total Price: ₹{total}</p>
        <button className="btn cart-btn" onClick={checkout}>
          Proceed to Checkout
        </button>
      </div>

      <footer>
        © 2026 Amazon Clone
        <br />
        React JS • JavaScript • CSS • Flexbox • Grid • LocalStorage
      </footer>
    </div>
  );
}

export default App;