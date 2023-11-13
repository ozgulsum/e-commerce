import {React,useState} from 'react';


function Product({products,addProduct,}) {

 return(
  <div className='col-md-9 row'>
  <h1>Ürünler</h1>


{
products.map((product) => (
<div className="card col-md-2 ms-5 mb-3" style={{width: "18rem"}}>
         <br />
        <img className="card-img-top " height={"170"} src={product.resim} style={{ cursor: "pointer" }}
        />
        <div className="card-body">
            <h5 className="card-title">{product.ad}</h5>
            <p className="card-text">{product.fiyat} TL <br /> </p>
            <a href="#" className="btn btn-primary" onClick={addProduct} >Sepete Ekle </a> 
        </div>
        </div>



))

//Bloklar sayfayı kaplar. Row yapısı vermem lazım.

}
  </div>  
     
);


}



export default Product;