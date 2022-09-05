import React, { useState, useEffect } from "react";

const CategoryList = (props) => {
  const [getLists, setGetLists] = useState([]);

  let getCategory = async () => {
    let fetchData = await fetch("http://localhost:9999/categories/getAllCategories");
    let respnseData = await fetchData.json();
    console.log(respnseData);
    setGetLists(respnseData);
  };
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div>
      {getLists.map((list) => (
        <div>
          <span>{list.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
