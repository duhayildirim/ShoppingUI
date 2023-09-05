import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../components/cart";

function Products() {

    const [data, setData] = useState([])
    const [result, setResult] = useState(data)

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
            setResult(data)
        })
    }

    useEffect(() => {
        getData()
        setResult(data)
    }, [])



    const filter = (event) => {
        setResult(data.filter(f => f.title.toLowerCase().includes(event.target.value.toLowerCase())))
    }

    return (
        <div>
            <section className="subscribe_section">
                <div className="container-fuild">
                    <div className="box">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="subscribe_form ">
                                    <div className="heading_container heading_center">
                                        <h3>Our Products</h3>
                                    </div>
                                    <p>Detailed search among products</p>
                                    <form action="">
                                        <input type="search" placeholder="Product Name" onChange={filter} />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="product_section layout_padding">
                <div className="container">
                    <div className="row">
                        {
                            data.length > 0 && result.map((product, key) => {
                                return (
                                    <div className="col-sm-6 col-md-4 col-lg-4" key={key}>
                                        <div className="box">
                                            <div className="option_container">
                                                <div className="options">
                                                    <a href="#" onClick={() => submit(product.id)} className="option1">
                                                        Add To Cart
                                                    </a>
                                                    <Link to={{
                                                        pathname: "/detail",
                                                        state: {stateParam: product.id}
                                                    }} className="option2">
                                                        Detail
                                                    </Link>
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
                </div>
            </section>
        </div>
    );
}

export default Products;
