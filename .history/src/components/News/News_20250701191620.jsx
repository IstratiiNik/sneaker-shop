import React from "react";
import styles from "./News.module.scss";
import Banner from "../../assets/main/Banner.png"

const News = () => {
  return (
    <section className={styles.news}>
      <img
        alt="News"
        className={styles.image}
      />
    </section>
  );
};

export default News;
