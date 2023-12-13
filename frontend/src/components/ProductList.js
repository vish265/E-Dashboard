import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Productlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let results = await fetch("http://localhost:5000/products");

    results = await results.json();
    setProducts(results);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/delete-product/${id}`, {
      method: "Delete",
    });

    result = await result.json();

    if (result) {
      alert("Record is deleted");
      getProducts();
    }
  };

  const searchHandle = async (event) => {
    let key = event.target.value;

    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();

      if (result) {
        setProducts(result);
      }
    }else{
      getProducts();
    }
  };

  return (
    <div>
      <center>
        {" "}
        <h1>Product List</h1>{" "}
      </center>
      <center>
        {" "}
        <input
          type="text"
          placeholder="Search Product"
          className="search"
          onChange={searchHandle}
        />
      </center>

      <ul className="product-list">
        <li>Sr.No.</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operation</li>
      </ul>

      {
      products.length>0 ? products.map((item, index) => (
        <ul className="product-list" key={item._id}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>Rs.{item.price}</li>
          <li>{item.category}</li>
          <li>{item.company}</li>
          <li>
            <button className="button" onClick={() => deleteProduct(item._id)}>
              Delete
            </button>
            |
            <Link className="button" to={"/update/" + item._id}>
              Update
            </Link>
          </li>
        </ul>
      )) : <center><h1>No Products Found</h1></center>
    }
    </div>
  );
};

export default Productlist;
