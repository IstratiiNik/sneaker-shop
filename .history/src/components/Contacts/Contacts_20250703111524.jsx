import React from "react";
import SnapChat from "../../assets/contacts/SnapChat.png";
import Facebook from "../../assets/contacts/Facebook.png";
import X from "../../assets/contacts/X.png";
import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.contactForm}>
        <h1>Contacts</h1>
        <ul>
          <li>+49 123 45678901</li>
          <li>emailexample@gmail.com</li>
          <form action="#">
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Name" required />
            <input type="textarea" placeholder="Insert your message" required />
            <button type="submit">Send</button>
          </form>
        </ul>
      </div>
      <div className={styles.links}>
        <p>Find us on:</p>
        <a href="https://www.snapchat.com"><img src={SnapChat} alt="Snapchat" /></a>
        <a href="https://www.facebook.com"><img src={Facebook} alt="Facebook" /></a>
        <a href="https://www.X.com"><img src={SnapChat} alt="Snapchat" /></a>
      </div>
    </section>
  );
};

export default Contacts;
