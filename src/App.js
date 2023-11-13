import Header from './Header';
import './App.css';
import {React,useState} from 'react';
import Categories from './Categories';
import Product from './Product';

function App() {
const [categories,setCategories]=useState([
{ id: 0, ad: "Elektronik", desc: "Elektronik ürünler kategorisi" },
{ id: 1, ad: "Giyim", desc: "Giyim ürünleri kategorisi" },
{ id: 3, ad: "Mobilya", desc: "Mobilya ürünleri kategorisi" },
{ id: 5, ad: "Ev Aletleri", desc: "Ev Aletleri kategorisi" },

]);


const [products, setProducts] = useState([
  { id: 0, kategori: "Elektronik", ad: "Tablet", fiyat: 22000.00, aciklama: "Zamanın nasıl geçtiğini anlamayacaksınız.", resim: "https://m.media-amazon.com/images/I/71VbHaAqbML._AC_UF1000,1000_QL80_.jpg" },
  { id: 1, kategori: "Elektronik", ad: "Telefon", fiyat: 12000.00, aciklama: "Ergonomi ve kalitenin buluşma noktası.",  resim: "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mu163tua-apple-iphone-15-plus-128gb-blue-638305561521763700.jpg" },
  { id: 2, kategori: "Giyim", ad: "Şal", fiyat: 200.00, aciklama: "Ekstra rahat kumaş ile mutlu olacaksınız.", resim: "https://cache.freshscarfs.com/product/cache/743x1073_-18190-25-B.jpg" },
  { id: 3, kategori: "Giyim", ad: "Etek", fiyat: 400.00, aciklama: "En özel günlerin kurtarıcısı.", resim: "https://cdn.dsmcdn.com/ty686/product/media/images/20230112/17/257355069/673130748/1/1_org_zoom.jpg" },
  { id: 4, kategori: "Mobilya", ad: "Koltuk Takımı", fiyat: 34000.00, aciklama: "Rahatlık ve şıklığın buluşma noktası.",  resim: "https://i.pinimg.com/564x/40/8c/a5/408ca502dd449e3031b27b65194260bc.jpg" },
  { id: 5, kategori: "Mobilya", ad: "Yemek Odası Takımı", fiyat: 27000.00, aciklama: "Güzel anılar biriktirmek için ideal.",  resim: "https://i.pinimg.com/564x/b6/c7/dc/b6c7dcbca2561c8537e1f97384e88b0a.jpg" },
  { id: 6, kategori: "Ev Aletleri", ad: "Buzdolabı", fiyat: 20000.00, aciklama: "Enerji tasarrufu sağlar.",  resim: "https://trenddeki.com/image/cache/catalog/products_2022/Ar%C3%A7elik-270561-Esc-Kombi-Tipi-Siyah-Cam-No-Frost-Buzdolab%C4%B1-270561-ESC-600x900w.jpg" },
  { id: 7, kategori: "Ev Aletleri", ad: "Çamaşır Makinesi", fiyat: 12000.00, aciklama: "Çamaşırlarınız hiç olmadığı kada temiz olacak.", resim: "https://productimages.hepsiburada.net/s/274/300-443/110000260569002.jpg" },
  ]);

const addProduct = () => {
  console.log("Ürün eklendi");
  
}


  return (
    <div className="App">
    <Header/>
    <div className='row'>
   <Categories categories={categories}/> 
  <Product products={products} addProduct={addProduct}/>
  
    </div>
    

    </div>
  );
}

export default App;
