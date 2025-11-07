 function CombatScreen({gameScreen,setGameScreen,showGameScreen}) {
    return(
      <>
        <div className="game-screen">
          <div className="monster-and-player-area">
            <div className="monster-area">
              <h1>Monster name</h1>
              <h2>Monster hp</h2>
            </div>
            <div className="player-area">
                <button>Attack</button>
                <button>Flee</button>
                <h2>HP: 100</h2>
                <h2>Gold:0 </h2>
            </div>
          </div>
          <div className="textbox-area">
            <h1>test</h1>
          </div>
        </div>
      </>
    )
  
 }

 export default CombatScreen