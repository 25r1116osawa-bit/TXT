"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(data);
  }, []);

  // 🔥 localStorage更新
  const updateCart = (newCart: any[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // ＋ボタン
  const increase = (id: number) => {
    const newCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    updateCart(newCart);
  };

  // −ボタン
  const decrease = (id: number) => {
    const newCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0); // 0なら削除

    updateCart(newCart);
  };

  // 削除
  const remove = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id);
    updateCart(newCart);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">カート</h1>

      {cart.length === 0 && <p>カートは空です</p>}

      {cart.map((item) => (
        <div
          key={item.id}
          className="border p-4 mb-2 rounded flex justify-between items-center"
        >
          <div>
            <p className="font-bold">{item.name}</p>
            <p>¥{item.price.toLocaleString()}</p>

            <div className="flex items-center gap-2 mt-2">
              <button onClick={() => decrease(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increase(item.id)}>+</button>
            </div>
          </div>

          <button
            onClick={() => remove(item.id)}
            className="text-red-500"
          >
            削除
          </button>
        </div>
      ))}

      <h2 className="mt-6 text-lg font-bold">
        合計: ¥{total.toLocaleString()}
      </h2>
    </div>
  );
}