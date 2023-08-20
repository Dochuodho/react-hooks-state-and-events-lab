import React, { useState } from "react";

function Item({ name, category , id}) {
  const[cart, setCart]=useState([])
  const[cartClass, setCartClass]=useState("")
  function handleAddItem(e){
   let data={
    "id":id,
    "name":name,
    "category": category    
   }
   if(cart.map(object => object.id).includes(id)){
    let newCart=cart.filter(obj => obj.id !== id)
    setCart(newCart)
    let newClass=""
    setCartClass(newClass)
   }else{
    let newCart=[...cart, data]
    setCart(newCart)
    let newClass="in-cart"
    setCartClass(newClass)
   }
  }

  
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartClass} onClick={handleAddItem}>{cartClass === "in-cart"? "Add to Cart": "Remove From Cart"}</button>
    </li>
  );
}

export default Item;