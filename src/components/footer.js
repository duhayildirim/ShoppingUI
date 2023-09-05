import { BrowserRouter, Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="full">
                                <div className="information_f">
                                    <p><strong>ADDRESS:</strong> 93 White tower, Street Name: Benta City, Turkey</p>
                                    <p><strong>TELEPHONE:</strong> +91 505 474 3210</p>
                                    <p><strong>EMAIL:</strong> dexample@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="widget_menu">


                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="widget_menu">
                                                <h3>Menu</h3>
                                                <ul>
                                                    <li><a href="#">Home</a></li>
                                                    <li><a href="#">About</a></li>
                                                    <li><a href="#">Services</a></li>
                                                    <li><a href="#">Testimonial</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="widget_menu">
                                        <h3>Search</h3>
                                        <div className="information_f">
                                            <p>Go to products for detailed search</p>
                                        </div>
                                        <Link to="/products">
                                            <div className="btnbox">
                                                Search
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="cpy_">
                <p className="mx-auto">
                    Coded By <a href="https://github.com/duhayildirim" target="_blank">Duha Yildirim</a> © 2023  
                </p>
            </div>
        </div>
    );
}

export default Footer;