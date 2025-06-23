"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { ShoppingCart, Star } from "lucide-react";
import ShoppingCarts from "./ShoppingCarts";
import StarProducts from "./StarProducts";
import { useCartStore } from "@/app/stores/cartStore";

export default function Nav() {
  const [openSheet, setOpenSheet] = useState(false);
  const [openFav, setOpenFav] = useState(false);
  const items = useCartStore((state) => state.items);

  return (
    <div>
      <div className="flex flex-row w-full justify-end mt-2  border-b border-border ">
        <Button
          variant="link"
          size="sm"
          onClick={() => {
            setOpenFav(true);
          }}
        >
          <div className="relative">
            <Star />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 flex items-center justify-center min-w-[1.2em] h-[1.2em]">
              3
            </span>
          </div>
        </Button>
        <Button
          variant="link"
          size="sm"
          onClick={() => {
            setOpenSheet(true);
          }}
        >
          <div className="relative">
            <ShoppingCart />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 flex items-center justify-center min-w-[1.2em] h-[1.2em]">
              {items.length}
            </span>
          </div>
        </Button>
      </div>
      <ShoppingCarts openSheet={openSheet} setOpenSheet={setOpenSheet} />
      <StarProducts openFav={openFav} setOpenFav={setOpenFav} />
    </div>
  );
}
