import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Spinner from 'react-bootstrap/Spinner';

const Loading = ({ data }) => {
  let [error, setError] = useState(false);
  let loading_state = useSelector((state) => state.loading);

  useEffect(() => {
    if (data.length > 0) {
      setError(false)
    } else {
      setTimeout(() => {
        setError(true)
      }, 2000);
    }
  }, [data, error])


  if (error) return (<p> No data</p >)
  return (
    <>
      {
        loading_state && <Spinner className='spinner' animation="border" variant="danger" />
      }
    </>
  );
};

export default Loading;