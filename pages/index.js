import { useEffect, useState } from "react";
import Header from "../components/Header";
import Filters from "../components/Filters";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import Head from "next/head";


export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    if (!activeCategory) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((p) => p.category === activeCategory)
      );
    }
  }, [activeCategory, products]);

  return (
    <>
    <Head>
  {/* Primary SEO */}
  <title>Discover Our Products | Appscrip</title>
  <meta
    name="description"
    content="Discover premium products curated with quality, craftsmanship, and sustainability in mind."
  />

  {/* Open Graph (optional but good) */}
  <meta property="og:title" content="Discover Our Products | Appscrip" />
  <meta
    property="og:description"
    content="Browse premium products with filters, categories, and responsive design."
  />
  <meta property="og:type" content="website" />

  {/* Schema Markup */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Product Listing",
        description:
          "A collection of curated products displayed with filters and responsive layout",
      }),
    }}
  />
</Head>

      <Header />
      <section style={{ textAlign: "center", padding: "40px 20px" }}>
  <h1>Discover Our Products</h1>
  <h2>Lorem ipsum dolor sit amet consectetur.</h2>
</section>

<main style={{ display: "flex", gap: "20px", padding: "20px" }}>
  <Filters setActiveCategory={setActiveCategory} />
  <ProductGrid products={filteredProducts} />
</main>
      <Footer />
    </>
  );
}
