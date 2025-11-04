
function GameScreen({showMenuScreen,setGameScreen,setMenuScreen,showShopScreen,setShopScreen}) {
    return(
      <div className="game-screen">
        <h1>This is the game screen</h1>
        <button onClick={showMenuScreen}>Back to menu</button>
        <button onClick={showShopScreen}>Go to shop</button>
      </div>
    )
}

export default GameScreen