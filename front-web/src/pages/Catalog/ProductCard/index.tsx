import './styles.scss';
import '../../../app.scss';
import {ReactComponent as ProductImage} from '../../../core/assets/images/product.svg';

const ProductCard = () =>(
    <div className= "card-base border-radius-10 product-card">
        <ProductImage/>
        <div className="product-info">
            <h6 className="product-name">Computador Desktop - 17 Desktop</h6>
            <div className="product-price-container">
                <span className="product-currenc">R$</span>
                <h3 className="product-price">2.799.3</h3>
            </div>
        </div>

    </div>
);




export default ProductCard; 