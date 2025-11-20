
function MenuScreen({showGameScreen}) {

  return(
    <>
      <div className="menu-screen">
        <h1 className="game-title">My Game</h1>
        <div className="menu-buttons">
          <button onClick={() => {showGameScreen()}}>Start!</button>
          <button>Options</button>
        </div>
      </div>
    </>
  )
}

export default MenuScreen