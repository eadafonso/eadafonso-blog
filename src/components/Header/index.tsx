import React from "react";

import styles from "./styles.module.scss";

const Header: React.FC = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <a href="#" className={styles.title}>
            Eadafonso | Blog
          </a>

          <nav>
            <a href="#">Home</a>
            <a href="#">Search</a>
            <a href="#">Forum</a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
