import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const CategoryList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory]=useState("")
  const [searchParams, setSearchParams] = useSearchParams();
 
  let categoryHandler = async (cid) => {
    let category = await fetch(
      `http://localhost:9092/categories/getByCid?cid=${cid}`
    );
    const response = await category.json();
   
    setProducts(response.products)
    setCategory(response.categoryName)
  };

  useEffect(() => {
    categoryHandler(searchParams.get("cid"))    
  }, []);


  return (
    <div>
      {products.map((product) => (
        <div>
          <img src={product.imageName} alt="" />
          <span>{product.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
