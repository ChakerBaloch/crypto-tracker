import "../styles/CryptoCard.css";

export default function CryptoCard({ name, price }: { name: string; price: number }) {
  return (
    <div className="crypto-card">
      <h3 className="coin-name">{name}</h3>
      <div className="price-container">
        <span className="currency-symbol">$</span>
        <span className="price">{price.toLocaleString()}</span>
      </div>
    </div>
  );
}
