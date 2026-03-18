import "./globals.css";
import Link from "next/link";
type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  isRecommended: boolean;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:3000/api/users", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Page() {
  const products = await getProducts();

  // おすすめ3件
  const recommended = products
    .filter((p) => p.isRecommended)
    .slice(0, 3);

  // 最大9件
  const displayProducts = products.slice(0, 9);

  // カテゴリ一覧（重複削除）
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="p-6 space-y-10">
      
      {/* ⭐ おすすめ */}
      <div>
        <h2 className="text-xl font-bold mb-4">おすすめ商品</h2>
        <div className="grid grid-cols-3 gap-4">
          {recommended.map((p) => (
            <div key={p.id} className="border rounded-lg p-4">
              <img
                src={`https://picsum.photos/seed/product-${p.id}/300/200`}
                className="mb-2 rounded"
              />
              <p className="font-bold">{p.name}</p>
              <p>¥{p.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ⭐ メイン */}
      <div className="grid grid-cols-4 gap-6">
        
        {/* 左：フィルター */}
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold mb-2">カテゴリー</h3>
          {categories.map((c) => (
            <p key={c} className="cursor-pointer hover:underline">
              {c}
            </p>
          ))}

          <h3 className="font-bold mt-4 mb-2">価格帯</h3>
          <p>〜1000円</p>
          <p>1000〜3000円</p>
          <p>3000円〜</p>
        </div>

        {/* 右：商品一覧 */}
        <div className="col-span-3 grid grid-cols-3 gap-4">
  {displayProducts.map((p) => (
    <Link
      key={p.id}
      href={`/products/${p.id}`}
      className="border rounded-lg p-4 cursor-pointer hover:shadow block"
    >
      <img
        src={`https://picsum.photos/seed/product-${p.id}/300/200`}
        className="mb-2 rounded"
      />
      <p className="font-bold">{p.name}</p>
      <p>¥{p.price.toLocaleString()}</p>
    </Link>
  ))}
</div>
      </div>
    </div>
  );
}