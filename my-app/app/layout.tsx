import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-50">
        <header className="border-b p-4 flex gap-4">
          <Link href="/">ホーム</Link>
          <Link href="/">商品一覧</Link>
          <Link href="/login">注文状況</Link>
          <Link href="/dashboard">管理者</Link>
        </header>

        <main className="p-6">{children}</main>

        <footer className="border-t p-4 text-center text-sm text-gray-500">
          © 2026 My App
        </footer>
      </body>
    </html>
  );
}