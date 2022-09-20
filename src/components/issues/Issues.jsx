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

    let carrito

    if(!localStorage.getItem('carrito') || localStorage.getItem('carrito') == 'null'){
      carrito = []
    } else {
      carrito = [...JSON.parse(localStorage.getItem('carrito'))]
    }

    issues.map( issue => {
      const inCart = shopping_cart.some(c => c.id === issue.id)
      if(!inCart){
        carrito = [...carrito, issue]
        dispatch(addToCart(issue))
      }
    })
    localStorage.setItem("carrito", JSON.stringify(carrito))

    console.log(carrito)
    console.log(JSON.parse(localStorage.getItem('carrito')))
  }

  return (
    <div className='container'>
      <div className='row justify-content-center px-5 mb-5'>
        <button onClick={buyAll} className='btn btn-light btn-lg'>
          BUY ALL ISSUES
        </button>
      </div> <br/> <br/>
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