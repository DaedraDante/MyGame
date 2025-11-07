 function CombatScreen({damage,currentMonsterName,setCurrentMonsterName,
  currentMonsterHealth,setCurrentMonsterHealth,
  health,setHealth,gold,setGold,gameScreen,
  setGameScreen,showGameScreen}) {

    const attackMonster = () => {
      if(currentMonsterHealth > 0) {
        setCurrentMonsterHealth(prevMonsterHealth => prevMonsterHealth - damage)
        }else {
        alert(`succesfully defeated ${currentMonsterName}`)
        }
      }
      
    return(
      <>
        <div className="combat-screen">
          <div className="monster-and-player-area">
            <div className="monster-area">
              <h1>{currentMonsterName}</h1>
              <h2>{currentMonsterHealth}</h2>
            </div>
            <div className="player-area">
                <button onClick={() => {
                  attackMonster();
                }}>Attack</button>
                <button>Flee</button>
                <h2>HP: {health}</h2>
                <h2>Gold: {gold} </h2>
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