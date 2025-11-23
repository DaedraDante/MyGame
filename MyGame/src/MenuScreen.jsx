
function MenuScreen({showGameScreen,playClick}) {

  return(
    <>
      <div className="menu-screen">
        <h1 className="game-title">My Game</h1>
        <div className="menu-buttons">
          <button onClick={() => {showGameScreen(),playClick()}}>Start!</button>
          <button>Options</button>
        </div>
      </div>
    </>
  )
}

export default MenuScreen