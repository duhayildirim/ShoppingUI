import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../components/cart";

function Home() {

    const [data, setData] = useState([])

    const addCart = useCart(store => store.addCart)

    const products = useCart(state => state.products)

    const submit = (id) => {
        const product = data.find((product) => id === product.id)
        addCart({
            id: product.id,
            title: product.title,
            price: product.price,
            photo_url: product.photo_url
        })
    }

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

    return (
        <div>
            <section className="arrival_section">
                <div className="container">
                    <div className="box">
                        <div className="arrival_bg_box">
                            <img src="images/arrival-bg.png" alt="" />
                        </div>
                        <div className="row">
                            <div className="col-md-6 ml-auto">
                                <div className="heading_container remove_line_bt">
                                    <h2>
                                        #NewArrivals
                                    </h2>
                                </div>
                                <p className="pContent">
                                    Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
                                </p>
                                <Link to="/products">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="product_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Our <span>products</span>
                        </h2>
                    </div>
                    <div className="row">
                        {
                            data.length > 0 && data.slice(0, 6).map((product, key) => {
                                return (
                                    <div className="col-sm-6 col-md-4 col-lg-4" key={key}>
                                        <div className="box">
                                            <div className="option_container">
                                                <div className="options">
                                                    <a href="#" onClick={() => submit(product.id)} className="option1">
                                                        Add To Cart
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="img-box">
                                                <img src={`images/${product.photo_url}.png`} alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <h5>
                                                    {product.title}
                                                </h5>
                                                <h6>
                                                    ${product.price}
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <Link to="/products">
                        <div className="btn-box">
                            <a href="">
                                View All products
                            </a>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;
