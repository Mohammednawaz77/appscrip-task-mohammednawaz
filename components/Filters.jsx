import { useState } from "react";
import styles from "../styles/Filters.module.css";

export default function Filters({ setActiveCategory }) {
  const [open, setOpen] = useState({});
  const [showFilters, setShowFilters] = useState(true);

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside className={styles.filters}>
      <p className={styles.count}>20 ITEMS</p>

      <button
        className={styles.hide}
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
      </button>

      {showFilters && (
        <>
          <label className={styles.check}>
            <input type="checkbox" /> Customizable
          </label>

          {["Ideal For", "Occasion", "Work"].map((item) => (
            <div key={item}>
              <div className={styles.row} onClick={() => toggle(item)}>
                <span>{item}</span>
                <span>{open[item] ? "−" : "+"}</span>
              </div>

              {open[item] && (
                <div className={styles.options}>
                  <p onClick={() => setActiveCategory("men's clothing")}>
                    Men's Clothing
                  </p>
                  <p onClick={() => setActiveCategory("women's clothing")}>
                    Women's Clothing
                  </p>
                  <p onClick={() => setActiveCategory("electronics")}>
                    Electronics
                  </p>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </aside>
  );
}
