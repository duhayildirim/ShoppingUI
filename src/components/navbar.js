import { Link } from "react-router-dom";
import { useCart } from "./cart";
import { useEffect } from "react";

function Navbar() {

    const products = useCart(state => state.products)

    const remove = useCart(state => state.remove)
    console.log(products)
    return (
        <div>
            <div className="hero_area">
                <header className="header_section">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg custom_nav-container ">
                            <Link className="navbar-brand" to="/"><img width="250" src="images/logo.png" alt="#" /></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className=""> Menu</span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">Cart
                                            {products.length > 0 &&
                                                (<small style={{color : "#f7444e"}} className="ml-1"> (
                                                    {products.length}
                                                    )
                                                </small>
                                                )
                                            }
                                            <span class="caret"></span></span></a>
                                        <ul class="dropdown-menu">
                                            {products.length === 0 ? (
                                                <li>
                                                    <small>no items.</small>
                                                </li>
                                            ) : (
                                                <>
                                                    {
                                                        products.map((product, key) => (
                                                            <li key={product.id}>
                                                                <a>{product.title}</a>
                                                                <a href="#" onClick={() => remove(product.id)} >
                                                                    <i className="fa fa-trash-o mt-1 ml-3 text-black-50 flrg"></i>
                                                                </a>
                                                                <hr />
                                                            </li>
                                                        ))
                                                    }
                                                    <li>
                                                        <Link className="nav-link" to="/cart">
                                                            Go To Cart
                                                        </Link>
                                                    </li>
                                                </>
                                            )}
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/products">Products</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="btn  my-2 my-sm-0 nav_search-btn" to="/products">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
            </div >
        </div >
    );
}

export default Navbar;