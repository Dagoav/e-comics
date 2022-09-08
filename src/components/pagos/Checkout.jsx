import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const Checkout = (/* {price} */) => {

    const url = 'http://localhost:3000/'

    const price = 10000

    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement) // Selecciona el num de tarjeta del componente Card
        })
        
        const { id } = paymentMethod;
        
        try {
            if(!error){
                const { data } = await axios.post(url + 'checkout', {
                    id: id,
                    price: price,
                });

                alert("COMIC PAGADO") // Ponganle un mensaje más bonito

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
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button>
                Buy
            </button>
        </form>
    )
}

export default Checkout;