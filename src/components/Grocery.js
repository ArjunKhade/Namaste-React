import { useState } from "react";

const groceryItems = [
  { id: "tomatoes", name: "Farm-fresh tomatoes", category: "Fresh produce", price: 45, unit: "500 g", icon: "🍅" },
  { id: "avocados", name: "Ripe avocados", category: "Fresh produce", price: 120, unit: "2 pieces", icon: "🥑" },
  { id: "milk", name: "Fresh dairy milk", category: "Dairy & pantry", price: 32, unit: "500 ml", icon: "🥛" },
  { id: "bread", name: "Bakery sourdough", category: "Dairy & pantry", price: 85, unit: "1 loaf", icon: "🍞" },
  { id: "pasta", name: "Classic penne pasta", category: "Dairy & pantry", price: 75, unit: "500 g", icon: "🍝" },
  { id: "lemons", name: "Juicy lemons", category: "Fresh produce", price: 40, unit: "4 pieces", icon: "🍋" },
];

const Grocery = () => {
  const [basket, setBasket] = useState({});
  const basketCount = Object.values(basket).reduce((total, quantity) => total + quantity, 0);
  const basketTotal = groceryItems.reduce(
    (total, item) => total + item.price * (basket[item.id] || 0),
    0
  );

  const addToBasket = (itemId) => {
    setBasket((currentBasket) => ({
      ...currentBasket,
      [itemId]: (currentBasket[itemId] || 0) + 1,
    }));
  };

  return (
    <main className="content-page grocery-page">
      <section className="page-hero grocery-hero">
        <p className="eyebrow">Your everyday essentials</p>
        <h1>Fresh picks for <span>your kitchen.</span></h1>
        <p>
          Stock up on the little things you need to make something delicious.
          Browse the sample selection and add your favorites to the basket.
        </p>
        <div className="basket-summary" role="status" aria-live="polite">
          <span aria-hidden="true">🛍️</span>
          <span>{basketCount} {basketCount === 1 ? "item" : "items"}</span>
          <strong>₹{basketTotal}</strong>
        </div>
      </section>

      <section className="grocery-catalog">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The good stuff</p>
            <h2>Shop the pantry</h2>
          </div>
          <p>Sample products · Prices in INR</p>
        </div>
        <div className="grocery-grid">
          {groceryItems.map((item) => (
            <article className="grocery-card" key={item.id}>
              <div className="grocery-item-art" aria-hidden="true">{item.icon}</div>
              <p className="grocery-category">{item.category}</p>
              <h3>{item.name}</h3>
              <p className="grocery-unit">{item.unit}</p>
              <div className="grocery-card-footer">
                <strong>₹{item.price}</strong>
                <button
                  className="add-button"
                  type="button"
                  onClick={() => addToBasket(item.id)}
                  aria-label={`Add ${item.name} to basket`}
                >
                  {basket[item.id] ? `Added · ${basket[item.id]}` : "Add"}
                </button>
              </div>
            </article>
          ))}
        </div>
        <p className="grocery-disclaimer">
          This is a sample grocery catalog. Checkout and delivery are not available yet.
        </p>
      </section>
    </main>
  );
};

export default Grocery;
