import React from 'react'

const Home = (props) => {
    console.log("home", props)
  return (
    <div>
        <h1>Home Component</h1>
        <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://cdn0.vox-cdn.com/hermano/verge/product/image/9693/akrales_210917_4760_0166_SQ.jpg" alt=""/>
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button
                    onClick={()=>props.addToCartHandler({price:1000,name:'iPhone'})}>Add To Cart</button>
                     <button
                     className='remove-cart-btn'
                    onClick={()=>props.removeFromCartHandler()}>Remove from Cart</button>
                </div>
            </div>
    </div>
  )
}

export default Home