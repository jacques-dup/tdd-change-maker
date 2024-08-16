import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import "./App.css";
import items from "./helpers/items.json";

type Currency = "usd" | "fkr" | "gbp";

interface AppProps extends ComponentPropsWithoutRef<"div"> {
  currency: Currency;
}

export const App = ({ currency = "usd", ...props }: AppProps) => {
  const [coins, setCoins] = useState<number[]>([]);

  useEffect(() => {
    if (currency === "usd") {
      setCoins([1, 5, 10, 25]);
    }
    if (currency === "fkr") {
      setCoins([1, 5, 10, 20]);
    }
    if (currency === "gbp") {
      setCoins([1, 2, 5, 10, 20, 50]);
    }
  }, [currency]);

  const purchaseAmounts = [12, 35, 72];

  return (
    <>
      <div id="app" {...props}>
        Change Maker!
        <div className="coins">{coins.join(", ")}</div>
        {/* Price */}
        <span></span>
        <br />
        {/*Tender amount*/}
        <label htmlFor="amount">Amount customer has</label>
        <input id="amount" type="text" />
        <br />
        <br />
        <div id="purchaseList">
          {purchaseAmounts.map((amount) => (
            <button>{amount}</button>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
