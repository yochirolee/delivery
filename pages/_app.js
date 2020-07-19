import "../styles/global.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import { FirebaseProvider } from "../context/firebaseContext";
import { ProductProvider } from "../context/productContext";
import { ProductsInCartProvider } from "../context/productInCartContext";
import { AuthProvider, AuthContext } from "../context/auth";
import { useContext } from "react";

export default function App({ Component, pageProps }) {

  return (
    <AuthProvider>
      <FirebaseProvider>
        <ProductsInCartProvider>
          <ProductProvider>
            <Component {...pageProps} />
          </ProductProvider>
        </ProductsInCartProvider>
      </FirebaseProvider>
    </AuthProvider>
  );
}
