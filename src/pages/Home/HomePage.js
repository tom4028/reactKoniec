import React,{Component} from "react";

import HeaderBig from "components/Header/HeaderBig";
import HeaderSmall from "components/Header/HeaderSmall";
import { connect } from 'react-redux';

//import ProductService from "services/ProductService";
import ProductsList from "components/ProductsList/ProductsList";

// const featuredDesktop = ProductService.getProductsByFilter({
//   category: "desktop",
//   featured: true
// });

// const featuredTablet = ProductService.getProductsByFilter({
//   category: "tablet",
//   featured: true
// });

// const featuredDesktop = ()=>{

// };
// const featuredTablet = {};



class HomePage extends Component{
  

  

  render(){

    
    const tempfeaturedDesktop = this.props.products.filter(p=>p.category ==='desktop');
    const featuredDesktop = tempfeaturedDesktop.filter(p=>p.featured===true);

    const tempfeaturedTablet = this.props.products.filter(p=>p.category ==='desktop');
    const featuredTablet = tempfeaturedTablet.filter(p=>p.featured===true);

    const ProductsSection = ({ title, products }) => (
      <>
        <HeaderSmall>{title}</HeaderSmall>
        <ProductsList products={products} />
      </>
    );
    
    
    return (
      <div>
          <HeaderBig>Welcome to our store</HeaderBig>
      <ProductsSection title="Desktops" products={featuredDesktop} />
      <ProductsSection title="Tablets" products={featuredTablet} />
      </div>
      
    )
  }
  

}
const mapStateToProps = state=>{
  return {
    products:state.products
  }
}


export default connect(mapStateToProps)(HomePage);
