export default function ProductCard({ product }) {
  return (
    <article>
      <img
        src={product.image}
        alt={product.title}
        width="200"
        height="250"
      />
      <h2>{product.title}</h2>
      <p>Sign in or Create an account to see pricing</p>
    </article>
  );
}
