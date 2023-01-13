import React from "react";

const Footer = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <a href="/" rel="noreferrer" className="mx-1"><img src={"/img/facebook..svg"} alt={"Facebook"} width={35} /></a>
                    <a href="/" rel="noreferrer" className="mx-1"><img src={"/img/twitter..svg"} alt={"Twitter"} width={35} /></a>
                    <a href="/" rel="noreferrer" className="mx-1"><img src={"/img/instagram..svg"} alt={"Instagram"} width={35} /></a>
                
                </div>
                
            </div>
            <hr />
            <div className="row">
                <div className="col-md-10">
                   
                </div>
                <div className="col-md-2 text-end">
                    <p><img src="/img/Logo-Tienda.png" alt="Imported Shoes" width="75"  />Imported Shoes</p> 
                </div>
            </div>
        </div>
    )
}

export default Footer;