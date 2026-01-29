import ProductCard from "./ProductCard";
import styles from "../styles/Product.module.css";

export default function ProductGrid({ products }) {
  return (
    <div className={styles.grid}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
