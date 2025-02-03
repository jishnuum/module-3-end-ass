import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from '../components/Productcard';
import Navbars from '../components/Navbars';


function Homepage() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            setProduct(res.data)

        }).catch((err) => {
            console.log(err);
        })
    }, [])

    console.log(product);
    return (
        <div>
            <div className="navs">
                <Navbars/>
            </div>
            {
                product.length ? <div className="productMain container my-4">
                <div className="row g-4">
                    {
                        product.map((pro) => (
                            <div className="col-md-3 d-flex">
                                <ProductCard item={pro}/>
                            </div>
                        ))
                    }

                </div> </div>: <div id="loading">
  <svg width={36} height={36} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style dangerouslySetInnerHTML={{__html: ".spinner_EUy1{animation:spinner_grm3 1.2s infinite}.spinner_f6oS{animation-delay:.1s}.spinner_g3nX{animation-delay:.2s}.spinner_nvEs{animation-delay:.3s}.spinner_MaNM{animation-delay:.4s}.spinner_4nle{animation-delay:.5s}.spinner_ZETM{animation-delay:.6s}.spinner_HXuO{animation-delay:.7s}.spinner_YaQo{animation-delay:.8s}.spinner_GOx1{animation-delay:.9s}.spinner_4vv9{animation-delay:1s}.spinner_NTs9{animation-delay:1.1s}.spinner_auJJ{transform-origin:center;animation:spinner_T3O6 6s linear infinite}@keyframes spinner_grm3{0%,50%{animation-timing-function:cubic-bezier(.27,.42,.37,.99);r:1px}25%{animation-timing-function:cubic-bezier(.53,0,.61,.73);r:2px}}@keyframes spinner_T3O6{0%{transform:rotate(360deg)}100%{transform:rotate(0deg)}}" }} /><g className="spinner_auJJ"><circle className="spinner_EUy1" cx={12} cy={3} r={1} /><circle className="spinner_EUy1 spinner_f6oS" cx="16.50" cy="4.21" r={1} /><circle className="spinner_EUy1 spinner_NTs9" cx="7.50" cy="4.21" r={1} /><circle className="spinner_EUy1 spinner_g3nX" cx="19.79" cy="7.50" r={1} /><circle className="spinner_EUy1 spinner_4vv9" cx="4.21" cy="7.50" r={1} /><circle className="spinner_EUy1 spinner_nvEs" cx={21.00} cy={12.00} r={1} /><circle className="spinner_EUy1 spinner_GOx1" cx={3.00} cy={12.00} r={1} /><circle className="spinner_EUy1 spinner_MaNM" cx="19.79" cy="16.50" r={1} /><circle className="spinner_EUy1 spinner_YaQo" cx="4.21" cy="16.50" r={1} /><circle className="spinner_EUy1 spinner_4nle" cx="16.50" cy="19.79" r={1} /><circle className="spinner_EUy1 spinner_HXuO" cx="7.50" cy="19.79" r={1} /><circle className="spinner_EUy1 spinner_ZETM" cx={12} cy={21} r={1} /></g></svg>
</div>
            }


        
        </div>
    )
}

export default Homepage
