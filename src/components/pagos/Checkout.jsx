import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { removeFromCart } from '../../redux/actions/shop_favs_rating';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Checkout = () => {

    const url = 'http://localhost:3000/shop/'
    const stateCart = useSelector(state => state.shop_fav_rating.cart_shopping)

    const stripe = useStripe()
    const elements = useElements()

    var totalprices = 0;
    stateCart.map(e => totalprices = e.price + totalprices)

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement), // Selecciona el num de tarjeta del componente Card
        })

        // :( 
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
                elements.getElement(CardElement).clear() // Limpia el input
                stateCart.map( p => removeFromCart(p))
            } else {
                console.error("Error")
            }
        } catch (error) {
            // Error en el pago, ej sin fondos
            alert(error.response.data.error)
        }
    }
    return(
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