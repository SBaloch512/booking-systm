import "./globals.css";

export const metadata = {
  title: "Barber Booking",
  description: "Premium barber booking platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <div className="max-w-6xl mx-auto p-6">

          {/* Header */}
          <header className="flex justify-between items-center border-b border-yellow-500 pb-4 mb-8">
            <h1 className="text-2xl font-bold text-yellow-500">
              Barber Luxury
            </h1>

            <nav className="flex gap-6">
              <a className="hover:text-yellow-500 transition" href="/">
                Home
              </a>
              <a className="hover:text-yellow-500 transition" href="/booking">
                Book
              </a>
              <a className="hover:text-yellow-500 transition" href="/contact">
                Contact
              </a>
            </nav>
          </header>

          {children}

        </div>
      </body>
    </html>
  );
}