import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";


const Cart = () => {
   const {cart, cartTotal, clear, removeItem, sumTotal } = useContext(CartContext)


   if (cartTotal() === 0){ 
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12 text-center">
                    <div className="alert alert-danger" role="alert"> No tiene productos seleccionados </div>
                    <Link to={"/"} className="btn btn-danger">Volver al inicio</Link>
                </div>
            </div>
        </div>

    )
   }
   
    return(
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12">
                <table class="table">
                        <thead>
                                <th>
                                    <th scope="col" colSpan={5} className="text-end"><Link onClick={clear} className="btn btn-danger">Limpiar Carrito</Link></th>
                                </th>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col"className="text-end">Cantidad</th>
                                <th scope="col"className="text-end">Precio</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                            <td><img src={item.imagen} alt={item.nombre} width={200} /> </td>
                                            <td className="aling-middle"><b>{item.nombre}</b></td>
                                            <td className="aling-middle text-end">{item.quantity}</td>
                                            <td className="aling-middle text-end"> ${item.quantity * item.precio}</td>
                                            <td className="aling-middle text-end"><Link onClick={() => {removeItem(item.id)}}><img src={"/img/trash3.svg"} alt={"Eliminar producto"} width={40} /> </Link> </td>
                                    
                                    </tr>
                                ) )

                                } 
                                <tr>
                                    <td colSpan={2}>&nbsp;</td>
                                    <td className="text-end"> <b>Total a Pagar</b></td>
                                    <td className="text-end"><b>${sumTotal()}</b></td>
                                    <td className="text-end"><button className="btn btn-danger">Finalizar Compra</button></td>
                                </tr>       
                         </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart