import "./globals.css";
import { fonts } from "../fonts/fonts";
import { CartProvider } from "../context/CartContext";
import RouteLoaderProvider from "../components/RouteLoaderProvider";
import { WishlistProvider } from "../context/WishlistContext";

export const metadata = {
  title: "MuttaiKadai - Online Egg Selling Platform",
  description: "MuttaiKadai - Online Egg Selling Platform. Which is e-commerce-based. It is an online egg selling platform with various egg categories and products. It has different categories with different styles and layouts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fonts}>
        <CartProvider>
          <WishlistProvider>
            <RouteLoaderProvider>{children}</RouteLoaderProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
