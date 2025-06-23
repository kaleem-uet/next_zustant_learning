import ProductOverviews from "@/components/ProductOverviews";

async function getProduct(slug: string) {
  const res = await fetch(`https://dummyjson.com/products/${slug}`);
  const data = await res.json();
  return data;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const prodDetails = await getProduct(slug);
  return <ProductOverviews prodDetails={prodDetails} />;
}