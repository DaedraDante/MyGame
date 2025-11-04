
function MenuScreen({showGameScreen,menuScreen,
    setMenuScreen,gameScreen,setGameScreen}) {

  return(
    <>
      <div className="menu-screen">
        <h1>My Game</h1>
        <button onClick={() => {
            showGameScreen();
        }}>Start!</button>
        <button>Options</button>
        <button>Stats</button>
      </div>
    </>
  )
}

export default MenuScreen