
function MenuScreen({showGameScreen,menuScreen,
    setMenuScreen,gameScreen,setGameScreen}) {

  return(
    <>
      <div className="menu-screen">
        <h1 className="game-title">My Game</h1>
        <div className="menu-buttons">
          <button onClick={() => {showGameScreen()}}>Start!</button>
          <button>Options</button>
          <button>Stats</button>
        </div>
      </div>
    </>
  )
}

export default MenuScreen