import React, { useState, useEffect } from "react";
import Four04 from '../FourO4/FourO4'
import { useParams } from "react-router-dom";

function ProductPage() {

const [product, setProduct] = useState([]);

const { ProductID } = useParams();

  useEffect(() => {

    fetch("http://localhost:3000/iphones")
      .then((res) => res.json())
      .then((data)=>{
        const productList = data.products;
       
        const SingleProduct = productList.filter(
            (product) => product.product_url === ProductID
        );
         setProduct(SingleProduct);
        })
        .catch(()=> console.log('error: unable to fetch!'));
    
  }, [ProductID]);


if(product.length){

  return( 
    <div>
      <section className="'internal-page-wrapper">
        <div className="container">
  {product?.map((product)=>{
  
  return (
    <>
    
     <div key={product.product_id} className="row justify-content-center text-center product-holder h-100 top-100 bottom-100" >
     <div className={`col-sm-12 col-md-6 my-auto`}>
                  <div className="product-title">
                    {product.product_name}</div>
                  <div className="product-brief">
                    {product.product_brief_description}
                    </div>
                 
                </div>
  
                <div className={`col-sm-12 col-md-6`}>
                  <div className="prodict-image">
                    <img src={product.product_img} alt="" />
                  </div>
                </div>
              </div>
  
        </>
  );
  
  
  }
  )}
  
        </div>
  
      </section>
    </div>
  )

}
else {
  return <Four04 />
}



 

}
export default ProductPage;