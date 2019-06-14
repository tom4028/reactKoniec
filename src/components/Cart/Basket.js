import React,{Component } from "react";

import { connect } from 'react-redux';



import BasketProductList from './BasketProductList';

class Basket extends Component{


    render(){
        console.log("from basket.js",this.props);
       const shoppingCarts = this.props.carts;
        return(
  
           <BasketProductList products={shoppingCarts} />
          );
    }
} 

const mapStateToProps = state=>{
    return{
        carts:state.carts
    }
}

export default connect(mapStateToProps)(Basket);
