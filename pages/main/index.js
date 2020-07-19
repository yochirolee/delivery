import React, { useContext, useEffect, useState } from "react";
import ProductCardsContainer from "../../components/main/productsCardContainer";
import { FirebaseContext } from "../../context/firebaseContext";
import { ProductContext } from "../../context/productContext";
import Layout from "../../layout/layout";
import firebase from 'firebase/app';
import "firebase/firestore";

function Main({ user }) {
  const [products, setProducts] = useContext(ProductContext);
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsubcribe = firebase
      .firestore()
      .collection("products")
      .onSnapshot(snapshot => {
        const newProducts = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(newProducts);
      });
      setLoading(false);
    return () => unsubcribe();
  }, []);


  // async function fetchData() {
  //   setLoading(true);
  //   const product_data = await firebase.getCollectionData({
  //     collection: "products",
  //   });

  //   setProducts(product_data);
  //   setLoading(false);
  // }

  return (
    <Layout>
      <div className="container mx-auto mt-10 ">
        {loading ? <p>Loading.....</p> : <ProductCardsContainer products={products} />}
      </div>
    </Layout>
  );
}

export default Main;
