import prisma from "@/lib/db/prisma";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import PriceTag from "@/components/PriceTag";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <div>
      <div className="hero rounded-xl bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={products[0].imageUrl}
            alt={products[0].name}
            width={400}
            height={800}
            className="rounded-lr w-full max-w-sm shadow-2xl"
            priority
          />
          <div>
            <h1 className="text-5xl font-bold">{products[0].name}</h1>
            <p className="py-6">{products[0].description}</p>
            <PriceTag className="" price={products[0].price}></PriceTag>
            <br />
            <Link
              href={"/products/" + products[0].id}
              className="btn btn-primary mt-3"
            >
              詳細へ！
            </Link>
          </div>
        </div>
      </div>
      <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {products.slice(1).map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
