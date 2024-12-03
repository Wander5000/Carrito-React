import React from "react";

export function Product(id, name, price, image){
  return(
    <article className="product">
      <header className="product-info">
        <img src={image} className="product-image"/>
        <div className="product-text-info">
          <strong className="product-name">{name}</strong>
          <span className="product-price">{price}</span>
        </div>
      </header>
      <aside>
        <button className="add-to-cart">Añadir al Carro</button>
      </aside>
    </article>
  )
}