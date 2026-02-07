import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get("http://localhost:4000/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-5">
      {products.map((product) => (
        <li
          key={product.id}
          className="
            rounded-lg
            border border-gray-200
            bg-white
            shadow-sm
            transition
            hover:shadow-md
          "
        >
          {/* 이미지 영역 */}
          <div className="relative w-full h-60 overflow-hidden rounded-t-lg bg-gray-100">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={500}
              height={300}
              priority
            />
          </div>

          {/* 텍스트 영역 */}
          <div className="p-4 space-y-2">
            <div className="text-sm font-medium text-gray-900 line-clamp-2">
              {product.name}
            </div>

            <div className="text-lg font-semibold text-blue-600">
              {product.price.toLocaleString()}원
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
