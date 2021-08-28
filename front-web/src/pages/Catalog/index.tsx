import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import './styles.scss';


const Catalog = () =>(
    <div className= "catalog-container">
        <h1 className="catalog-title" >Catalogo de Produtos</h1>
        <div className="catalog-products">
           <Link to= "/catalog/1" ><ProductCard/></Link>
           <Link to= "/catalog/2"><ProductCard/></Link>
           <Link to= "/catalog/3"><ProductCard/></Link>
           <Link to= "/catalog/4"><ProductCard/></Link>
           <Link to= "/catalog/5"><ProductCard/></Link>
           <Link to= "/catalog/6"><ProductCard/></Link>
           <Link to= "/catalog/7"><ProductCard/></Link>
           <Link to= "/catalog/8"><ProductCard/></Link>
           <Link to= "/catalog/9"><ProductCard/></Link>
        </div>
    </div>

);


export default Catalog ; 