import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { App } from "../App";

describe("App", () => {
  /**
   * BUSINESS REQUIREMENT
   * 1. The coin denominations will be supplied as a parameter.
   * 2. We need to support denominations for at least GB-£ , US-$ , Fi-Kr
   */
  test("coin denominations can be in USD", () => {
    const { container } = render(<App currency="usd" />);
    const coins = container.querySelector(".coins") as Element;
    expect(coins.innerHTML).toBe("1, 5, 10, 25");
  });

  test("coin denominations can be in FKR", () => {
    const { container } = render(<App currency="fkr" />);
    const coins = container.querySelector(".coins");
    expect((coins as HTMLElement).innerHTML).toBe("1, 5, 10, 20");
  });

  test("coin denominations can be in GBP", () => {
    const { container } = render(<App currency="gbp" />);
    const coins = container.querySelector(".coins");
    expect((coins as HTMLElement).innerHTML).toBe("1, 2, 5, 10, 20, 50");
  });

  /**
   * BUSINESS REQUIREMENT
   * 3. The user needs to be able to make a purchase, by supplying a given amount
   */
  test("A list of purchases can be displayed", () => {
    const { container } = render(<App currency="gbp" />);
    const list = container.querySelectorAll(
      "#purchaseList button"
    ) as NodeListOf<Element>;
    expect(list.length).toBeGreaterThan(0);
  });

  test("An item can cost an amount", () => {});

  test("The user can make a purchase", () => {});

  /**
   * BUSINESS REQUIREMENT
   * 4. The user should get the correct change
   */
  test("The user can get change", () => {});

  test("The user's change is of the corect coin denominations", () => {});

  /**
   * BUSINESS REQUIREMENT
   * 5. The Vending machine should give the minimum amount of coins as change
   */
  test("the user gets the least amount of coins", () => {});
});
