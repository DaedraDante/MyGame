 function CombatScreen({currentMonsterGoldGiven,
  setCurrentMonsterGoldGiven,
  enemiesDefeated,setEnemiesDefeated,
  damage,currentMonsterName,setCurrentMonsterName,
  currentMonsterHealth,setCurrentMonsterHealth,
  health,setHealth,gold,setGold,gameScreen,
  setGameScreen,showGameScreen,
  maxHealth,setMaxHealth,
  textboxMsgs,setTextboxMsgs}) {
    const attackPlayer = () => {}
    const attackMonster = () => {
      if(currentMonsterHealth > 1) {
        setCurrentMonsterHealth(prevMonsterHealth => prevMonsterHealth - damage)
        setTextboxMsgs(prevArray => [...prevArray,`Hit monster for ${damage} damage`])
        }else {
          setEnemiesDefeated(prevEnemiesDefeated => prevEnemiesDefeated + 1)
          console.log(enemiesDefeated)
          alert(`succesfully defeated ${currentMonsterName}`)
          setGold(prevGold => prevGold + currentMonsterGoldGiven)
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
                <button onClick={() => {
                  showGameScreen();
                }}>Flee</button>
                <h2>HP: {maxHealth}</h2>
                <h2>Gold: {gold} </h2>
            </div>
          </div>
          <div className="textbox-area">
            <h1>test</h1>
            {textboxMsgs.map((msg,index) => (
              <p key={index}>{msg}</p>
            ))}
          </div>
        </div>
      </>
    )
  
 }

 export default CombatScreen