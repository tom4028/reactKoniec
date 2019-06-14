import tempProducts from "../products.json";


const initState= {
    products:tempProducts,
    carts:[]
}

const rootReducer = (state=initState,action)=>{
    
    if(action.type==='ADD_TO_CART'){
        console.log(action);
        let newCart = state.products.filter(p=>p.id ===action.id);
        console.log(newCart);
        return{
            ...state,
            carts:state.carts.concat(newCart)
        }
    } else{
        return state;
    }
    
    

    
}


export default rootReducer;