"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  isRecommended: boolean;
};

export default function ProductDetail() {
  const { id } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState<Product | null>(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p: Product) => p.id === Number(id));
        setProduct(found);
      });
  }, [id]);

  if (!product) return <p>読み込み中...</p>;

  function addToCart(product: any, quantity: number) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const existing = cart.find((item: any) => item.id === product.id);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

  return (
    <div className="p-6 space-y-6">
      
      {/* 戻る */}
      <button onClick={() => router.back()} className="text-blue-500">
        ← 戻る
      </button>

      {/* 商品 */}
      <div className="flex gap-6">
        
        <img
          src={`https://picsum.photos/seed/product-${product.id}/400/300`}
          className="rounded"
        />

        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-xl mt-2">¥{product.price.toLocaleString()}</p>

          {/* 数量 */}
          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={() => setCount(count - 1)}
              disabled={count <= 1}
              className="border px-3 py-1"
            >
              -
            </button>

            <span>{count}</span>

            <button
              onClick={() => setCount(count + 1)}
              className="border px-3 py-1"
            >
              +
            </button>
          </div>

          {/* カート */}
          <button onClick={()=>addToCart(product,count)} className="mt-4 bg-blue-500 text-white px-6 py-2 rounded">
            カートに追加
          </button>
        </div>
      </div>
    </div>
  );
}