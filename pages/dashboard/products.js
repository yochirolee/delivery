import React, { useContext } from "react";
import { useEffect, useState } from "react";
import LayoutDashboard from "../../layout/layoutDashboard";
import TableProducts from "../../components/dashboard/tableProducts";
import ProductForm from "../../components/dashboard/productForm";
import { ProductContext } from "../../context/productContext";
import { FirebaseContext } from "../../context/firebaseContext";

function Products() {
  const [products, setProducts] = useContext(ProductContext);
  const firebase = useContext(FirebaseContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDataSnap();
  }, []);

  // async function fetchData() {
  //   setLoading(true);
  //   const product_data = await firebase.getCollectionData({
  //     collection: "products",
  //   });

  //   setProducts(product_data);
  //   setLoading(false);
  // }

  async function fetchDataSnap() {
    setLoading(true);
    setProducts(await firebase.GetSnapShot("products"));
    setLoading(false);
  }

  const HandleSubmit = (data) => {
    firebase.saveData({ collection: "products", data: data });
    document.getElementById("form-product").reset();
    fetchDataSnap();
  };

  const HandleRemove = async (prod) => {
    await firebase.deleteDocument({ collection: "products", id: prod.id });
    fetchDataSnap();
  };

  return (
    <LayoutDashboard>
      <h3 className="text-gray-700 text-3xl font-medium mx-4 mt-2 mb-2 border-b-2">
        Products
      </h3>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex mt-2 mx-10">
          <ProductForm HandleSubmit={HandleSubmit} />
          <TableProducts products={products} HandleRemove={HandleRemove} />
        </div>
      )}
    </LayoutDashboard>
  );
}

export default Products;
