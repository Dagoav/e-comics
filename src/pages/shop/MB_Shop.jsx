import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, emptyCart } from "../../redux/actions/shop_favs_rating";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import NavBar from "../../components/navBar/Navbar";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import "./MB_Shop.css"
import Swal from "sweetalert2";

const ShoppingCart2 = () => {
  const cart_shopping = useSelector(state => state.shop_fav_rating.cart_shopping)
  //JSON.parse(localStorage.getItem('carrito'))
  console.log(cart_shopping);
  const dispatch = useDispatch()
  let totalPrice = 0;
  const [compras, setCompras] = useState(false)

  const removeProduct = (issue) => {
    // var confirm = window.confirm(`Remove ${issue.name || 'this issue'} from the Cart?`)
    Swal.fire({
      title: (`Remove ${issue.name || 'this issue'} from the Cart?`),
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'your comic has been removed from your shopping list',
          'success'
        )
        let carrito = cart_shopping.filter(c => c.id !== issue.id)
        if (carrito.length === 0) {
          localStorage.removeItem("carrito")
        } else {
          localStorage.setItem("carrito", JSON.stringify(carrito))
        }
        dispatch(removeFromCart(issue))
      }
    })
    // if (confirm) {
    // }
  }


  const removeAll = () => {
    // var confirm = window.confirm(`Are you sure you want to empty your shopping cart?`)
    Swal.fire({
      title: 'Are you sure?',
      text: (`Are you sure you want to empty your shopping cart?`),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, empty!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'your shopping cart is empty.',
          'success'
        )
        localStorage.removeItem("carrito")
        cart_shopping.map(p => dispatch(removeFromCart(p)))
      }
    })
    // if (confirm) {
    // }
  }

  return (
    <div className="container-shop">
      <NavBar searchbar={false}></NavBar>
      <section className="mt-5">
        <MDBContainer className="test-shop py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBTable responsive>
                {/* Issues */}
                <MDBTableHead>
                  <tr>
                    <th scope="col" className="h5">
                      Shopping Bag
                    </th>
                    <th scope="col">#Issue number</th>
                    <th scope="col">Format</th>
                    <th scope="col">Price</th>
                    <th scope="col">Remove</th>
                  </tr>
                </MDBTableHead>

                   <Button className="btn-reviews"  variant="primary"    onClick={removeAll} width={50} >
                   Empty cart
                   </Button>
                {
                  cart_shopping.map(product => {
                    totalPrice += product.price
                    return (
                      < MDBTableBody >
                        <tr>
                          <th scope="row">
                            <div className="d-flex align-items-center">
                              <img
                                src={product.image}
                                className="rounded-3"
                                style={{ width: "120px" }}
                                alt="Book"
                              />
                              <div className="flex-column ms-4" style={{ width: "140px" }}>
                                <p className="mb-2">{product.name}</p>
                              </div>
                            </div>
                          </th>
                          <td className="align-middle">
                            <p className="mb-0" style={{ fontWeight: "500", paddingLeft: '30%' }}>
                              {product.issue_number}
                            </p>
                          </td>
                          <td className="align-middle">
                            <p className="mb-0" style={{ fontWeight: "500" }}>
                              Digital
                            </p>
                          </td>
                          <td className="align-middle">
                            <p className="mb-0" style={{ fontWeight: "500" }}>
                              ${Number(product.price).toFixed(2)}
                            </p>
                          </td>
                          <td className="align-middle">
                            <p className="mb-0" style={{ fontWeight: "500" }}>
                              <span className="material-symbols-outlined remove-comic " >
                                <button className="btn btn-danger "  onClick={() => removeProduct(product)}>
                                  X
                                </button>
                              </span>
                            </p>
                          </td>
                        </tr>
                      </MDBTableBody>
                    )
                  })
                }
              </MDBTable>
            </MDBCol>
          </MDBRow>
          <Link to='/user/shop/checkout' >
            <MDBRow className="payment-btn">
              <MDBBtn size="lg">
                <div className="px-2">
                  <span className="px-2">Checkout</span>
                  <span>${Number(totalPrice).toFixed(2)}</span>
                </div>
              </MDBBtn>
            </MDBRow>
          </Link>
        </MDBContainer>
      </section>
    </div>
  );
}

export default ShoppingCart2;