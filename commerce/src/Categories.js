import {React,useState} from 'react';


function Categories({categories,newProduct,setNewProduct,addNewProduct}) {

console.log(categories);//Props Yapısı:Bir componentten diğerine stateleri,fonksiyonları göndermeyi sağlar.

//HTML kodu içerisinde JS kodu yazmak için {} kullan.

 return(
    
        <div className="col-md-2 mt-5 ms-5">

      <h3 className="mb-3">Kategoriler</h3>
      <ul className="list-group ">
        {categories.map((kategori, index) => ( //parantez=return //Her döngü çalıştığında elemanı alır ve geri kullanır.Geri döndürdüğü yeri dizi olarak döndürür.String html yok eleman olarak bunları döndürebilir.
          <li key={index} className="mt-2 list-group-item">
            
            <a className="link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">
              {kategori["ad"]}
            </a>

          </li>
        ))}
      </ul>
      
      <div className="mt-4">
              
        <form>
        
          
        <div className="form-group">
          <h2>Ürün Ekle</h2>
          <label htmlFor="urunAdi" className=" mt-2">Ürün Adı:</label>
          <input
            type="text"
            className="form-control"
            id="urunAdi"
            name="ad"
            value={newProduct.ad}
            onChange={(e)=>setNewProduct({...newProduct,ad:e.target.value})}
            
          
            x
          />
        </div>
        <div className="form-group">
          <label htmlFor="urunFiyati" className=" mt-2">Ürün Fiyatı:</label>
          <input
            type="text"
            className="form-control"
            id="urunFiyati"
            name="fiyat"
            value={newProduct.fiyat}
            onChange={(e)=>setNewProduct({...newProduct,fiyat:parseFloat(e.target.value)})} //İNT GELDİĞİNDEN DEĞERİ DÖNÜŞTÜR
            
          />
        </div>
        
        <button
          type="button"
          className="btn btn-success mt-2"
          onClick={addNewProduct}
        >
          Ürün Ekle
        </button>
       
          </form>
        

      </div>
      
      </div>
    

);




}

//Filter işlem yapmaya izin vermez,şartı sağlayan elemanları geri döndürür.Map ile işlem yaparsın.







export default Categories;