// import { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
// import ProductDd from "../components/ProductDd";
import { useContext } from "react";
import ProductDisplay from "../components/ProductDisplay";
import { ShopContext } from "../Context/ShopContext";
import ProductDd from "../components/ProductDd";
import ProductDescription from "../components/ProductDescription";
import RelatedProduct from "../components/RelatedProduct";
// import ProductDescription from "../components/ProductDescription";
// import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  console.log(all_products, productId);

  const product = all_products?.find((e) => e.id === Number(productId));

  return (
    <section className="max_padd_container py-28">
      <div>
        <ProductDd product={product} />
        <ProductDisplay product={product} />
        <ProductDescription />
        <RelatedProduct />
      </div>
    </section>
  );
};

export default Product;
