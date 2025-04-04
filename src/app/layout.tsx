import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body cz-shortcut-listen="true">
        <div className="min-h-screen bg-gradient-to-br from-black to-slate-900 text-slate-100 flex">
          {children}
        </div>
      </body>
    </html>
  );
}
