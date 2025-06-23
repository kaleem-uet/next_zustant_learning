import React from "react";
import { Button } from "./button";
import { useCartStore } from "@/app/stores/cartStore";
import { Product } from "@/lib/types";

export default function CartButton({ prodDetails }: { prodDetails: Product }) {
  const addItem = useCartStore((state) => state?.addItem);

  return (
    <Button
      className=" mt-2 w-[100%] pointer-coarse: "
      onClick={() =>
        addItem({
          id: prodDetails.id.toString(),
          name: prodDetails.title,
          price: prodDetails.price,
          image: prodDetails.thumbnail,
        })
      }
    >
      Add to bag
    </Button>
  );
}
