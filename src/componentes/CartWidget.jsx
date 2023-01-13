import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
const {cartTotal} = useContext (CartContext)

    return (
            <Link to={"/cart"} type="button" className="btn btn-danger position-relative">
                <img src="/img/cart-fill.svg" alt="Carrito" width="28" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
            </Link>
    )
}
export default CartWidget ;