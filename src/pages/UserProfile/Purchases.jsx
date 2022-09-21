import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../components/navBar/Navbar";
import { getAllPurchases } from "../../redux/actions/shop_favs_rating";
import './purchase.css'




export default function Purchases() {
    const dispatch = useDispatch()
    const userId = JSON.parse(localStorage.getItem("id"))
    let purchase = useSelector((state) => state.shop_fav_rating.purchases )
    
    useEffect(() => {
      dispatch(getAllPurchases(userId))
    }, [ userId])

   
    console.log(purchase)
    
    return (
      <div className='containergen'>

        <NavBar/>
        
          <div className='titlename'>
              <div>
                  <h1 className="titlepur">  YOUR PURCHASES</h1>
              </div>
          </div>


            <div  className="contenedorcompras">
          {   
              purchase.map(e =>{
                  return(
                      // <div className="contendorpurchases" key={e.id}>
                            <div className='detailpurchase'>
          
                              <div className="volum">
                              <h4><b> volume No: {e.volume_id}</b></h4>
                              </div>
                              
                              <div className ="issues">
                              <h4><b>issue No: {e.issue_number}</b></h4>
                              </div>
                              
                              <div className= "price">
                              <h4><b>price: {(e.price).toFixed(2)}</b></h4> 
                              </div>
                              
                              <div className="imgcompra">
                              <img className='imgcomic' src= {e.image} alt="comic"/> 
                              </div>
                              
                              
    
                            </div>
                             
                      // </div>
                  )
               })   
          }
      </div>            
  </div>
)

}


