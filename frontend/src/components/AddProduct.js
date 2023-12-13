import React from "react";

const AddProduct = ()=>{
    const [name,setName] = React.useState('');
    const [price,setPrice] = React.useState('');
    const [category,setCategory] = React.useState('');
    const [company,setCompany] = React.useState('');
    const [error,setError] = React.useState(false);    
    const addProduct = async ()=>{
     if(!name || !price || !category || !company){
              
        setError(true);   
        return false;

     }


        console.log(name,price,category,company);
        const userId =JSON.parse( localStorage.getItem('user'))._id;
        console.log(userId);
        let result = await fetch('http://localhost:5000/add-product',{
            method:"post",
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':'application/json'
               }
        })
        result = await result.json();

        console.log(result);
        if(result){
            alert('Product Added');
        }

    }
    return(
        <div className="product">
            <h1>Add Products</h1>
            <input type="text" value={name} className="inputBox" placeholder="Enter Product Name" onChange={(e)=>{setName(e.target.value)}} />
            {error && !name && <span className="invalid-input">Enter valid name</span>}
            <input type="text" value={price} className="inputBox" placeholder="Enter Product Price" onChange={(e)=>{setPrice(e.target.value)}} />
            {error && !price && <span className="invalid-input">Enter valid Price</span>}
            <input type="text" value={category} className="inputBox" placeholder="Enter Product Category" onChange={(e)=>{setCategory(e.target.value)}} />
            {error && !category && <span className="invalid-input">Enter valid Category</span>}
            <input type="text" value={company} className="inputBox" placeholder="Enter Product Company" onChange={(e)=>{setCompany(e.target.value)}} />
            {error && !company && <span className="invalid-input">Enter valid Company</span>}
            <button onClick={addProduct} className="inputButton">Add Product</button>
        </div>
    )
};

export default AddProduct;