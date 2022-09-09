import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getIssues, addToCart } from "../../redux/actions";
import CardIssue from './CardIssue';


function Issue({ issue_number }) {
  const dispatch = useDispatch();
  const issues = useSelector((state) => state.issues);
  const shopping_cart = useSelector(state => state.cart_shopping);
  
  useEffect(() => {
    dispatch(getIssues(issue_number))
  }, [dispatch, issue_number])

  let buyAll = () => {
    issues.map(i => 
        dispatch(addToCart(i, shopping_cart))
      )
  }

  return (
    <div className='container'>
      <button onClick={buyAll}>COMPRAR TODOS</button> <br/> <br/>
      {
        issues.length > 0 && issues.map(issue => (
          <CardIssue key={issue.id} data={issue} />
        ))
      }
    </div>
  );
}

export default Issue;