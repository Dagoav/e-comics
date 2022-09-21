import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { sendEmail } from '../../redux/actions/admin';
import { processPayment, removeFromCartOnly } from '../../redux/actions/shop_favs_rating';
import { json, Link } from 'react-router-dom';



const Payment = () => {

    const url = 'http://localhost:3000/shop/'
    const stateCart = useSelector(state => state.shop_fav_rating.cart_shopping)
    let listEmail = []
    const stripe = useStripe()
    const elements = useElements()
    const dispatch = useDispatch()

    var totalprices = 0;
    stateCart.map(e => totalprices = e.price + totalprices)

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement), // Selecciona el num de tarjeta del componente Card
        })

        const { id } = paymentMethod;
        const card = paymentMethod.card.funding
        
        var totalprices = 0;
        stateCart.map(e => totalprices = e.price + totalprices)
        totalprices = Math.floor(totalprices * 100)

        try {
            if(!error){
                const { data } = await axios.post(url + 'checkout', {
                    carrito: stateCart,
                    id: id,
                    price: totalprices,
                });

                alert("PAYMENT SUCCESSFUL!")
                const userEmail = await JSON.parse(localStorage.getItem('email'))
                if (userEmail) {
                  listEmail.push(userEmail)
                }
                
                dispatch(sendEmail(listEmail))
                listEmail = []
                elements.getElement(CardElement).clear()

                const status = "Completo"
                stateCart.map( p => dispatch(processPayment(p, card, status)))
                stateCart.map( p => dispatch(removeFromCartOnly(p)))

            } else {
                console.error("Error")
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
                BUY
            </button>
            <Link to='/home'>
            <button>
                HOME
            </button>
            </Link>
        </form>
      </>
    )
}

export default Payment;



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