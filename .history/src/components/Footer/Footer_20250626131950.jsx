import React from "react";
import styles from "./Footer.module.scss";
import facebookLogo from "../../assets/Facebook_logo.svg";
import twitterLogo from "../../assets/Twitter_logo.svg";
import instagremLogo from "../../assets/Instagram_logo.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>Contacts</p>
        <div>
          <p>+49 123 45678901</p>
          <p>emailexample@gmail.com</p>
        </div>
        <p>2025 Sniker-Shop. All Rights reserved</p>
      </div>
		<div className={styles.footerRight}>
			<div >
				<a href="link.domain">
					<img src={facebookLogo} alt="facebook" />
				</a>
				<a href="link.domain">
					<img src={twitterLogo} alt="twitter" />
				</a>
				<a href="link.domain">
					<img src={in} alt="instagram" />
				</a>
			</div>
		</div>
    </footer>
  );
};

export default Footer;
