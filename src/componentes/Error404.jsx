import React from "react";

const Error404 =() => {
    return(
       <div className="container my-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="alert altert-danger text center" role="alert">
                        <h1>Error 404</h1>
                        <h5>Lo lamentamos pero esta pagina no esta disponible o no existe</h5>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default Error404