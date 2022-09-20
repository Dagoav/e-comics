import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { sendEmail } from '../../redux/actions/admin';
import { Link } from 'react-router-dom';

const Checkout = (/* {price} */) => {

    const url = 'http://localhost:3000/'
    let listEmail = []
    const price = 10000
    const stripe = useStripe()
    const elements = useElements()
    const dispatch = useDispatch();
    const stateCart = useSelector(state => state.shop_fav_rating.cart_shopping)
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement) // Selecciona el num de tarjeta del componente Card
        })
        const { id } = paymentMethod;

            var totalprices = 0;
            stateCart.map(e => totalprices = e.price + totalprices)
        try {
            if(!error){
                const { data } = await axios.post(url + 'checkout', {
                    carrito: stateCart,
                    id: id,
                    price: totalprices,
                });
                console.log(data, "soy data en el front buscando payment")
                alert("COMIC PAGADO") // Ponganle un mensaje más bonito
                
                const userEmail = await localStorage.getItem('email')
                if (userEmail) {
                  listEmail.push(userEmail)
                }
                console.log(listEmail);
                dispatch(sendEmail(listEmail))
                listEmail = []
                elements.getElement(CardElement).clear() // Limpia el input
            } else {
                console.log(error)
            }
        } catch (error) {
            // Error en el pago, ej sin fondos
            alert(error.response.data.error)
        }
    }
    return(
      <>
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button>
                Buy
            </button>
            <Link to="/home">
            <button>home
            </button>
            </Link>
        </form>
        <button onClick={()=>{
          const userEmail = localStorage.getItem('email')
          console.log(userEmail);
          listEmail.push(userEmail)
          console.log(listEmail);
        }}>Try</button>
      </>
    )
}

export default Checkout;



// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import axios from 'axios';
// import { useAuth0 } from '@auth0/auth0-react';
// import { useNavigate } from 'react-router-dom';
// const backendURL = process.env.REACT_APP_API;
// const Checkout = (/* {price} */) => {
// const token = JSON.parse(localStorage.getItem("token"))

    

//     const price = 10000

//     const stripe = useStripe()
//     const elements = useElements()
//     const navigate = useNavigate()
//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         const { paymentMethod, error } = await stripe.createPaymentMethod({
//             type: 'card',
//             card: elements.getElement(CardElement) // Selecciona el num de tarjeta del componente Card
//         })
//         const { id } = paymentMethod;
//         try {
//             if(!error){
//                 const response = await axios({
//                     method: 'POST',
//                     url: `${backendURL}/checkout`,
//                     id: id,
//                     price: price,
//                     headers: {
//                     "Authorization": `Bearer ${token.token}`
//                     }
//                   })
//                   if(response.data.Rol !== "USER"){
//                     navigate('/login')
//                     }
                

//                 alert("COMIC PAGADO") // Ponganle un mensaje más bonito
//                 elements.getElement(CardElement).clear() // Limpia el input
//             } else {
//                 console.log(error)
//             }
//         } catch (error) {
//             // Error en el pago, ej sin fondos
//             alert(error.response.data.error)
//         }
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//             <CardElement />
//             <button>
//                 Buy
//             </button>
//         </form>
//     )
// }

// export default Checkout;