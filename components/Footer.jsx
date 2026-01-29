import styles from "../styles/Footer.module.css"


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <h4>BE THE FIRST TO KNOW</h4>
            <p>Sign up for updates from mettä muse.</p>
            <input placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>

          <div>
            <h4>CONTACT US</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamus.com</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>Copyright © 2023 mettamuse</p>
        </div>
      </div>
    </footer>
  );
}
