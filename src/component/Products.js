import React, { useState } from "react";

function Products() {
  const data = { productId: "", sellingPrice: "", productName: "" };
  const [inputData, setInputData] = useState(data);
  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem("userData")) || [];
    const updatedData = [...existingData, inputData];
    localStorage.setItem("userData", JSON.stringify(updatedData));
    console.log(existingData);
  }
  
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label>Product ID: </label>
        <input
          type="number"
          value={inputData.productId}
          name="productId"
          onChange={handleData}
        />

        <label>Selling Price: </label>
        <input
          type="number"
          value={inputData.sellingPrice}
          onChange={handleData}
          name="sellingPrice"
        />

        <label>Product Name: </label>
        <input
          type="text"
          value={inputData.productName}
          onChange={handleData}
          name="productName"
        />
        <button>Add Product</button>
      </form>
      
    </div>
  );
}

export default Products;
