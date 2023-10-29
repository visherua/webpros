import { useState } from "react";
import "./styles.module.css";

import styles from "./styles.module.css";
//
const MainComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [domainName, setDomainName] = useState("domain.store");
  return (
    <div>
      <div className={styles.head}>
        <input
          className={styles.text_input}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button
          className={styles.button_continue}
          onClick={() => setDomainName(inputValue + '.store')}
        >
          Continue
        </button>
      </div>
      <main className={styles.main}>
        <section className={styles.top_section}>
          <div className={styles.top_section_left}>
            <p>
              <img
                className={styles.check_icon}
                src={"https://www.svgrepo.com/show/8345/checked.svg"}
              ></img>
              it`s a match
            </p>
            <p>{domainName ? domainName : "domain.store"}</p>
            <p>This domain is available, get it now before it`s to late</p>
          </div>
          <div className={styles.top_section_right}>
            <p>for the first year</p>
            <p>$99</p>
            <button>
              Add to basket
              <img
                className={styles.card_button_image}
                src={
                  "https://www.svgrepo.com/show/491806/cart-trolley-ui-4.svg"
                }
              ></img>
            </button>
          </div>
        </section>
        <section className={styles.bottom_section}>
          <div className={styles.features}>
            <p>Features:</p>
            <p className={styles.like_button}>
              <img
                className={styles.check_icon}
                src={"https://www.svgrepo.com/show/8345/checked.svg"}
              ></img>
              free domain protection when you add hosting
            </p>
            <p className={styles.like_button}>
              <img
                className={styles.check_icon}
                src={"https://www.svgrepo.com/show/8345/checked.svg"}
              ></img>
              free site builder
            </p>
            <p className={styles.like_button}>
              <img
                className={styles.check_icon}
                src={"https://www.svgrepo.com/show/8345/checked.svg"}
              ></img>
              managment portal
            </p>
            <p className={styles.like_button}>
              <img
                className={styles.check_icon}
                src={"https://www.svgrepo.com/show/8345/checked.svg"}
              ></img>
              25/7 support
            </p>
          </div>
          <p className={styles.configuration_text}>
            You can configurate this domain in the checkout.
          </p>
          <div className={styles.cards}>
            <div className={styles.left_card}>
              <h2> You`ve picked well</h2>
              <ul>
                <li className={styles.list_item}>
                  <p>
                    {" "}
                    Recive a <b>20% discount</b> from 3+ years purchase
                  </p>
                </li>
                <li className={styles.list_item}>
                  <p>
                    {" "}
                    <b>30%</b> of e-commerce stores use .store!
                  </p>
                </li>
                <li className={styles.list_item}>
                  <p>
                    This domains has been searched <b>1,234 times!</b>
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.right_card}>
              <h2>
                <b>Registration period:</b>
              </h2>
              <div className={styles.select_wrapper}>
                <select>
                  <option>1 Year - $99</option>
                </select>
              </div>
              <p>Renews Jan 2024 for 246/yr</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainComponent;
