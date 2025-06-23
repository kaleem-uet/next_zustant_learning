import ProductLists from "@/components/ProductLists";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products/?limit=10");
  const data = await res.json();
  return data.products; // return the array directly
}

export default function Home() {
  const productsPromise = getProducts();

  return (
    <>
      <ProductLists products={productsPromise} />
    </>
  );
}
