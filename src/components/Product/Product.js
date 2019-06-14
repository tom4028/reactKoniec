import React,{Component} from "react";

import { connect } from 'react-redux';

import styles from "./Product.module.css";

class Product extends Component {

  handleAddToCart = (id)=>{
    console.log(id);
    this.props.addCart(id);
  }

  render(){
      
    const {name, image, amount} = this.props;
    console.log(this.props.id);
    return (
      
      <div className={styles.Product}>
        
        <img className={styles.Image} src={image} alt={name} />
        <p className={styles.Price}>${amount}</p>
        <h3>{name}</h3>
    
        <button onClick={()=>this.handleAddToCart(this.props.id)}>Add To Cart</button>
      </div>
    );
  }
  
  
}

// const Product = ({ id,name, image, amount }) => {
  
//   return (
//     <div className={styles.Product}>
      
//       <img className={styles.Image} src={image} alt={name} />
//       <p className={styles.Price}>${amount}</p>
//       <h3>{name}</h3>
  
//       <button onClick={()=>console.log(id)}>Add To Cart</button>
//     </div>
//   );
// }

const mapDispatchToProps = dispatch =>{
  return{
    addCart:(id)=>dispatch({type:'ADD_TO_CART',id:id})
  }
}

export default connect(null,mapDispatchToProps)(Product);
