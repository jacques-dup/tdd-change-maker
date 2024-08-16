import { ComponentPropsWithoutRef } from "react";

interface PurchaseItem extends ComponentPropsWithoutRef<"div"> {
  name: string;
  price: number;
  currency: string;
}

export const PurchaseItem = ({
  name,
  price,
  currency,
  ...props
}: PurchaseItem) => {
  return (
    <div {...props}>
      <h2>{name}</h2>
      <p>
        Cost: {price} {currency}
      </p>
    </div>
  );
};
