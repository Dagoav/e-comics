import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getIssues } from "../../redux/actions/comics";
import { addToCart } from "../../redux/actions/shop_favs_rating";
import Loading from "../loading/Loading";
import CardIssue from './CardIssue';


function Issue({ volume_id }) {
  const dispatch = useDispatch();
  const issues = useSelector((state) => state.comicsReducer.issues);
  let loading_state = useSelector((state) => state.comicsReducer.loading_issues);
  const shopping_cart = useSelector(state => state.shop_fav_rating.cart_shopping);
  useEffect(() => {
    dispatch(getIssues(volume_id))
  }, [dispatch, volume_id])

  let buyAll = () => {

    if(shopping_cart.length > 0){

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
      <div className='pos-loading-issues'>
        <Loading data={issues} state={loading_state} />
      </div>
      {
        issues.length > 0 && !loading_state &&
        issues.map(issue => (
          <CardIssue key={issue.id} data={issue} />
        ))
      }
    </div>
  );
}

export default Issue;