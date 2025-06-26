import "./globals.css";

export const metadata = {
  title: "Shop",
  description: "An You & Me Shop app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased" suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
