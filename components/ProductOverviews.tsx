import { Star } from "lucide-react";
import Image from "next/image";
import { Product } from "@/lib/types";
import CartButton from "./ui/cartButton";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductOverviews({
  prodDetails,
}: {
  prodDetails: Product;
}) {
  return (
    <div>
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <Image
            alt={prodDetails.title}
            src={prodDetails.thumbnail}
            className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
            width={400}
            height={533}
          />
          {prodDetails.images?.slice(0, 2).map((img, idx) => (
            <Image
              key={img}
              alt={prodDetails.title + " image " + (idx + 1)}
              src={img}
              className="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
              width={400}
              height={267}
            />
          ))}
        </div>
        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {prodDetails.title}
            </h1>
          </div>
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              ${prodDetails.price}
            </p>
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <Star
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        prodDetails.rating > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "size-5 shrink-0"
                      )}
                    />
                  ))}
                </div>
                <p className="ml-3 text-sm text-gray-600">
                  {prodDetails.reviews?.length || 0} reviews
                </p>
              </div>
            </div>
            <CartButton prodDetails={prodDetails}/>
          </div>
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {prodDetails.description}
                </p>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Category</h3>
              <div className="mt-4">
                <span className="text-sm text-gray-600">
                  {prodDetails.category}
                </span>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">SKU: {prodDetails.sku}</p>
                <p className="text-sm text-gray-600">
                  Stock: {prodDetails.stock}
                </p>
                <p className="text-sm text-gray-600">
                  Warranty: {prodDetails.warrantyInformation}
                </p>
                <p className="text-sm text-gray-600">
                  Shipping: {prodDetails.shippingInformation}
                </p>
                <p className="text-sm text-gray-600">
                  Return Policy: {prodDetails.returnPolicy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
