import React, {} from "react";



export async function loadProducts() {
    const data = await fetch('/.netlify/functions/get-products')
      .then((res) => res.json())
      .catch((err) => console.error(err));
  
    const container = document.querySelector('.products');
  
    // TODO: add markup to display the products
    const pre = document.createElement('pre');
    pre.innerText = JSON.stringify(data, null, 2);
  
    container.appendChild(pre);
  }