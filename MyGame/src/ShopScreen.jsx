 
function ShopScreen({setMenuScreen,setGameScreen,setShopScreen,showGameScreen}) {
  return(
    <div className="shop-screen">
        <h1>This is the shop screen</h1>
        <button onClick={showGameScreen}>Exit</button>
    </div>
  )
}

export default ShopScreen;
