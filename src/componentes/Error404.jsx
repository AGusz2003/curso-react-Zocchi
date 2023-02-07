import React from "react";
import Swal from "sweetalert2";

const Error404 =() => {
    Swal.fire(
        'Error 404',
        'no disponible ',
        'error'
    )
    return(
       <div className="container my-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-danger text center" role="alert">
                        <h1>Error 404</h1>
                        <h3>Lo lamentamos pero esta pagina no esta disponible o no existe.</h3>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default Error404