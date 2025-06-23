"use client";
import Image from "next/image";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCartStore } from "@/app/stores/cartStore";

function ShoppingCarts({
  openSheet,
  setOpenSheet,
}: {
  openSheet: boolean;
  setOpenSheet: (open: boolean) => void;
}) {
  const removeItem = useCartStore((state) => state.removeItem);
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.total);

  return (
    <Sheet open={openSheet} onOpenChange={setOpenSheet}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping cart</SheetTitle>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4  overflow-auto">
          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y border-border">
                {items.map((item) => (
                  <li key={item.id} className="flex py-6">
                    <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <Image
                        alt={"image"}
                        src={item?.image}
                        className="size-full object-cover"
                        width={80}
                        height={80}
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a>{item.name}</a>
                          </h3>
                          <p className="ml-4">{item.price * item.quantity}</p>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {item.quantity}</p>

                        <div className="flex">
                          <Button
                            variant="ghost"
                            onClick={() => removeItem(item.id)}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <SheetFooter>
          <div className="border-t border-border px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>{total().toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
          </div>
          <Button type="submit">Check Out</Button>
          <SheetClose asChild>
            <Button variant="ghost">
              or Continue Shopping <span aria-hidden="true"> &rarr;</span>{" "}
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default ShoppingCarts;
