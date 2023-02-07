
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";
import React, { useContext, useState} from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const Checkout = () => {

const {cart,clear, sumTotal } = useContext(CartContext)
const [nombre, setNombre] =useState ("")
const [email, setEmail] =useState ("")
const [telefono, setTelefono] =useState ("")
const [orderId, setOrderId] = useState("")

const generarOrden = () => {
    const fecha = new Date()
    const order = {
        buyer: {name:nombre, phone:telefono, email:email},
        Productos: cart.map(item => ({id:item.id, nombre:item.nombre, cantidad:item.quantity, precio:item.precio,  price_total:item.quantity * item.precio})),
        total: sumTotal(),
        order_date: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
    }

        const db = getFirestore();
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, order). then((snapShot) =>{
            setOrderId(snapShot.id)
            const generatedOrder = doc(db, "orders", snapShot.id)
            updateDoc(generatedOrder, {total:order.total * 1.05})
            clear ()
        })
    }


    return (
        <div className="container">
            <div className="row my-5">
                 <div className="col-md-6">

                 <form>
                    <div className="mb-3">
                        <label for="nombre" className="form-label">Nombre:</label>
                        <input type="text" className="form-control"  placeholder="Ingrese su Nombre" onInput={(e) => {setNombre(e.target.value)}} />
                    </div>

                    <div className="mb-3">
                        <label for="email" className="form-label">Email:</label>
                        <input type="text" className="form-control" placeholder="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}} />
                    </div>

                    <div className="mb-3">
                        <label for="telefono" className="form-label">Numero Telefonico</label>
                        <input type="number" className="form-control"  placeholder="Ingrese su Telefonico" onInput={(e) => {setTelefono(e.target.value)}} />
                    </div>
                    <button type="button" className="btn btn-danger" onClick={generarOrden}>Generar id de Orden</button>
                </form>

                   </div>

                <div className="col-md-6">

                    <table className="table">
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                            <td><img src={item.imagen} alt={item.nombre} width={200} /> </td>
                                            <td className="aling-middle"><b>{item.nombre}</b></td>
                                            <td className="aling-middle text-end">{item.quantity}</td>
                                            <td className="aling-middle text-end"> ${item.quantity * item.precio}</td>
                                    </tr>
                                ) )

                                } 
                                <tr>
                                    <td colSpan={2}>&nbsp;</td>
                                    <td className="text-end"> <b>Total a Pagar</b></td>
                                    <td className="text-end"><b>${sumTotal()}</b></td>
                                </tr>       
                         </tbody>
                    </table>

            </div>
        </div>

        <div className="row">
                <div className="col text-center">
                {orderId !== "" ? <Navigate to={"/compraFinalizada/" + orderId} /> : ""}
                          
                </div>
            </div>
    </div>
       

        )
    }

export default Checkout ;