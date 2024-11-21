import './App.css'
import { Product } from './components/Productos'

export function App() {

  const Products = [

    {
      id: 1,
      name: "Mens Casual T-Shirt",
      price: 40000,
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 2,
      name: "Mens Cotton Jacket",
      price: 65000,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
      id: 3,
      name: "Mens Casual Slim Fit",
      price: 30000,
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    }
  ]

  return (
    <>
        <section className="buy-section">
          <header className="shop-title">
            <h1>La tiendita de Ropa UWU</h1>
          </header>
          <hr />
          <section className='products-section'>
          {Products.map(productinfo => {
            const {image, price, name} =  productinfo
            return(
              <Product
                image={image}
                price={price}
                name={name} />
            )
          })
        }
      </section>
      </section>
        <section className='cart-section'>

      </section>
    </>
  )
}