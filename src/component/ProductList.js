import React, { useState, useEffect } from "react";

function ProductList() {
  const [userData, setUserData] = useState([]);


  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("userData")) || [];
    setUserData(existingData);
  }, []);

  function handleDelete(index) {
    // Remove the item from local storage and update the state
    const updatedData = [...userData];
    updatedData.splice(index, 1);

    localStorage.setItem("userData", JSON.stringify(updatedData));
    setUserData(updatedData);
  
  }


  return (
    <div>
      <h1>Products</h1>
      <ul>
        {userData.map((item, index) => (
          <li key={index}>
            Product ID: {item.productId}, Selling Price: {item.sellingPrice}, Product Name: {item.productName}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
