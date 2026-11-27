import ProductCard from "./components/ProductCard/Page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">

      <div className="container mx-auto flex flex-col text-center gap-16">
        <div>
          <h1 className="text-6xl font-bold">ТЕКСТУРА</h1>
          <p className="text-xl">MOSCOW</p>
        </div>
        <p className="text-xl max-w-xl mx-auto "><strong className="font-bold">ТЕКСТУРА</strong> - Бренд одежды, который не боится размывать границы между материалами и текстурами. 
        Каждое изделие — это шанс заявить о себе, выразить личность через необычные сочетания и уникальные силуэты.</p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <Image src="/fill_product.svg" alt="product" width={457.63} height={596} className="rounded-2xl"/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>

    </div>
  );
}
