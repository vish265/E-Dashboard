import React, { useEffect } from "react";
import { json, useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    console.log(params);
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  const updateProduct = async () => {
    console.log(name, price, category, company);
    let result = await fetch(
      `http://localhost:5000/update-product/${params.id}`,
      {
        method: "Put",
        body: JSON.stringify({ name, price, category, company }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    result = await result.json();
    console.log(result);
    navigate('/');
  };
  return (
    <div className="product">
      <h1>Update Products</h1>
      <input
        type="text"
        value={name}
        className="inputBox"
        placeholder="Enter Product Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        type="text"
        value={price}
        className="inputBox"
        placeholder="Enter Product Price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />

      <input
        type="text"
        value={category}
        className="inputBox"
        placeholder="Enter Product Category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />

      <input
        type="text"
        value={company}
        className="inputBox"
        placeholder="Enter Product Company"
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />

      <button onClick={updateProduct} className="inputButton">
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
