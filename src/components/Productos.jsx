import React from "react";

export function Product({image, name, price}){
  return(
    <article className="product-card-body">
      <header className="product-information">
        <img src={image} className="product-image"/>
        <div className="product-info-text">
          <strong className="product-name">{name}</strong>
          <span className="product-price">{price}$</span>
        </div>
      </header>
      <aside className="add-cart-section">
        <button className="add-cart-btn">Agregar al Carrito</button>
      </aside>
    </article>
  )
}