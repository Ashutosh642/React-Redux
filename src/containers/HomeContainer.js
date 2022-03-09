import Home from '../components/Home';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../services/Actions/actions';

const mapStateToProps=state=>({
data:state.cardItems
})

const mapDispatchYoProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeFromCartHandler:data=>dispatch(removeFromCart(data))
})

export default connect (mapStateToProps,mapDispatchYoProps)(Home)
//export default Home;