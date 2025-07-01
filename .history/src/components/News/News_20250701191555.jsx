import React from "react";
import styles from "./News.module.scss";
imp

const News = () => {
  return (
    <section className={styles.news}>
      <img
        src="../../assets/main/Banner.png"
        alt="News"
        className={styles.image}
      />
    </section>
  );
};

export default News;
