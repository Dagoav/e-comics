import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getIssues, addToCart } from "../../redux/actions";
import CardIssue from './CardIssue';


function Issue({ issue_number }) {
  const dispatch = useDispatch();
  const issues = useSelector((state) => state.issues);
  
  const cart = useSelector(state => state.cart_shopping);
  
  useEffect(() => {
    dispatch(getIssues(issue_number))
  }, [dispatch, issue_number])

  let buyAll = () => {

    if(cart.length > 0){

    } else {
      // si carrito vacio

    }
    /* if((!localStorage.getItem('carrito'))){
      carrito = []
      carrito.push(comic)
    } else  {
      carrito = [...JSON.parse(localStorage.getItem('carrito'))]
      const inCart = carrito.some(c => c.id === comic.id)
      if(!inCart){
        carrito = [...carrito, comic]
        setComprado(true)
      }
    } */
    //localStorage.setItem("carrito", JSON.stringify(carrito));
    issues.map(i => i
        //dispatch(addToCart(i, shopping_cart))
      )
  }

  return (
    <div className='container'>
      <button onClick={buyAll}>NO TOCAR ESTE BOTÓN</button> <br/> <br/>
      {
        issues.length > 0 && issues.map(issue => (
          <CardIssue key={issue.id} data={issue} />
        ))
      }
    </div>
  );
}

export default Issue;