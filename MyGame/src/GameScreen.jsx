
function GameScreen({showMenuScreen,setGameScreen,setMenuScreen,showShopScreen,setShopScreen}) {
    return(
      <div className="game-screen">
        <div className="monster-and-player-area">
          <div className="monster-area">
            <p>test</p>
          </div>
          <div className="player-area">
            <button onClick={showMenuScreen}>Back to menu</button>
            <button onClick={showShopScreen}>Go to shop</button>
          </div>
        </div>
        <div className="textbox-area">
          <p>textbox</p>
        </div>
      </div>
    )
}

export default GameScreen