import { useCart } from "../components/cart";

function Cart() {

   const products = useCart(state => state.products)
   const remove = useCart(state => state.remove)

   return (
      <div>
         <div className="App">
            <section className="inner_page_head">
               <div className="container_fuild">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="full">
                           <h3>Cart</h3>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <div class="container mt-2 p-3 rounded cart">
               <div class="row no-gutters">
                  <div class="col-md-12">
                     <div class="product-details mr-2">
                        <hr />
                        {
                           products.length === 0 ?
                              (<div class="d-flex justify-content-between align-items-center mt-1 p-2 items rounded">
                                 <div class="d-flex flex-row">
                                    <span>No items.</span>
                                 </div>
                              </div>)
                              :
                              (
                                 <>
                                    {
                                       products.map((product, key) => (
                                          <div class="d-flex justify-content-between align-items-center mt-1 p-2 items rounded">
                                             <div class="d-flex flex-row"><img class="rounded" src={`images/${product.photo_url}.png`} width="90" />
                                                <div class="ml-4 mt-4">
                                                   <span class="font-weight-bold d-block">
                                                      {product.title}
                                                   </span>
                                                </div>
                                             </div>
                                             <div class="d-flex flex-row align-items-center">
                                                <span class="d-block ml-5 font-weight-bold">
                                                   ${product.price}
                                                </span>
                                                <a href="#" onClick={() => remove(product.id)} >
                                                  <i className="fa fa-trash-o mt-1 ml-3 text-black-50 flrg"></i>
                                                </a>
                                             </div>
                                          </div>
                                       ))
                                    }
                                 </>
                              )
                        }
                     </div>
                  </div>
               </div>
            </div>
            <section className="why_section layout_padding">
               <div className="container">
                  <div className="heading_container heading_center">
                     <h2>
                        Why Shop With Us
                     </h2>
                  </div>
                  <div className="row">
                     <div className="col-md-4">
                        <div className="box ">
                           <div className="img-box">
                           </div>
                           <div className="detail-box">
                              <h5>
                                 Fast Delivery
                              </h5>
                              <p>
                                 variations of passages of Lorem Ipsum available
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="box ">
                           <div className="img-box">
                           </div>
                           <div className="detail-box">
                              <h5>
                                 Free Shiping
                              </h5>
                              <p>
                                 variations of passages of Lorem Ipsum available
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="box ">
                           <div className="img-box">
                           </div>
                           <div className="detail-box">
                              <h5>
                                 Best Quality
                              </h5>
                              <p>
                                 variations of passages of Lorem Ipsum available
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </div >
   );
}

export default Cart;