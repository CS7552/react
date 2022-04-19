import Home from '../Components/Home'
import {connect} from 'react-redux'
import {addToCart,removeToCart} from '../Service/Actions/Actions'

const mapStateToProps = state =>({
    cardData:state.cartItems
})
const mapDispatchToProps = dispatch =>({
    addToCartHandler:data => dispatch(addToCart(data)),
    removeToCartHandler:data => dispatch(removeToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;