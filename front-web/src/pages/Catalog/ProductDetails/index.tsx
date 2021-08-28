import { Link, useParams } from 'react-router-dom';
import './styles.scss';

import  {ReactComponent as ArrowIcon} from '../../../core/assets/images/arrow.svg';
import  {ReactComponent as ProductImage} from '../../../core/assets/images/product.svg';



type ParamsType = {
    productId:string;
}


const ProductDetails = () =>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {productId} = useParams<ParamsType>();
    return(
        <div className="product-details-container">
         <div className="card-base border-radius-20 product-details">
             <Link to= "/catalog" className="product-details-link">
              <ArrowIcon className="icon-goback"/>
              <h1 className="text-goback" >VOLTAR</h1>
            </Link>
            <div className="row" >
                <div className="col-6 pr-5">
                       <div className = "product-details-card text-center">
                           <ProductImage className = "product-details-image"/>
                       </div>
                       <h1 className="product-details-name" >Computador Desktop - Intel Core i7  </h1>
                       <div className="product-price-container">
                         <span className="product-currenc">R$</span>
                         <h3 className="product-price">2.799.3</h3>
                </div>
                    </div>
                <div className="col-6 product-details-card">
                    <h1 className= "text-center n2">Descrição</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Incidunt similique corrupti beatae veniam, cum ea eligendi fuga saepe, 
                        aperiam repudiandae rem iusto earumaliquam molestias illo assumenda 
                        laudantium veritatis cumque.</p>
                    </div>

            </div>
         </div>
        </div>
    );
};




export default ProductDetails;