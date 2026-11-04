const LineItem = ({ item }) => (
  <article className="menu-item">
    <div className="item-left">
      <h3 className="item-name">{item.name}</h3>
      <p className="item-desc">{item.desc}</p>
      <div className="item-meta">
        <span className="price">{item.price}</span>
        {item.spicy && <span className="tag spicy">Spicy</span>}
        {item.veg === false ? null : <span className="tag veg">Veg</span>}
      </div>
    </div>
    {item.img && (
      <div className="item-right">
        <img src={item.img} alt={item.name} />
      </div>
    )}
  </article>
);

export default LineItem;
