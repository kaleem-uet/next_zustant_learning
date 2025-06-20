import ProductOverviews from "@/components/ProductOverviews";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <div>
      <ProductOverviews />
    </div>
  );
}
