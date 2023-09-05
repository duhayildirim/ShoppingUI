import { useEffect, useState } from "react";
import { useCart } from "../components/cart";
import { useParams, useLocation } from 'react-router-dom'

function Detail() {

   const [data, setData] = useState([]);

   const getData = () => {
      fetch('product.json', {
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then((response) => {
         return response.json()
      }).then((data) => {
         setData(data)
      })
   }

   useEffect(() => {
      getData()
   }, [])

   const product_id = useLocation().state.stateParam
   const product = data.find(product => product.id === product_id);

   return (
      <div>
         <section className="inner_page_head">
            <div className="container_fuild">
               <div className="row">
                  <div className="col-md-12">
                     <div className="full">
                        <h3>Product Details</h3>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="client_section layout_padding">
            <div className="container">
               <div className="box col-lg-10 mx-auto">
                  {product ? (
                     <>
                        <div className="img_container">
                           <div className="img-box">
                              <div className="img_box-inner">
                                 <img src={`images/${product.photo_url}.png`} alt="" />
                              </div>
                           </div>
                        </div>
                        <div className="detail-box">
                           <h5>
                              {product.title}
                           </h5>
                           <h6>
                              36, 37, 39, 40, 41
                           </h6>
                           <p>
                              Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.
                           </p>
                           <h3>
                              ${product.price}
                           </h3>
                        </div>
                     </>
                  ) : (
                     <h4>Ürün yükleniyor...</h4>
                  )}

               </div>
               <div className="box col-lg-2 mx-auto">

               </div>
            </div>
         </section>
      </div>
   );
}

export default Detail;
