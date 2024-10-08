import "@/styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <title>Carlos Carneiro</title>
      <body className="bg-neutral-600 max-w-6xl mx-auto">{children}</body>
    </html>
  );
}
