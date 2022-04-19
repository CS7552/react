import Header from '../Components/Header'
import {connect} from 'react-redux'

const mapStateToProps = state =>({
    data:state.cardItems
})
const mapDispatchToProps = dispatch =>({
    // addToCartHandler:data => dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)
// export default Home;