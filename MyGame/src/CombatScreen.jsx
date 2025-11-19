import { useState,useEffect } from "react"

 function CombatScreen({currentMonsterGoldGiven,
  setCurrentMonsterGoldGiven,
  enemiesDefeated,setEnemiesDefeated,
  damage,currentMonsterName,setCurrentMonsterName,
  currentMonsterHealth,setCurrentMonsterHealth,
  currentMonsterDamage,setCurrentMonsterDamage,
  health,setHealth,gold,setGold,gameScreen,
  setGameScreen,showGameScreen,
  maxHealth,setMaxHealth,
  textboxMsgs,setTextboxMsgs}) {
    const attackPlayer = () => {
      setHealth(prevHealth => prevHealth - currentMonsterDamage)
      setTextboxMsgs(prevArray => [...prevArray,`${currentMonsterName} hit you for ${currentMonsterDamage} damage`])
    }
    const attackMonster = () => {
      if(currentMonsterHealth > 1) {
        setCurrentMonsterHealth(prevMonsterHealth => prevMonsterHealth - damage)
        setTextboxMsgs(prevArray => [...prevArray,`Hit ${currentMonsterName} for ${damage} damage`])
        }else {
          setEnemiesDefeated(prevEnemiesDefeated => prevEnemiesDefeated + 1)
          console.log(enemiesDefeated)
          setTextboxMsgs(prevArray => [...prevArray,`Succesfully defeated ${currentMonsterName}`])
          setTextboxMsgs(prevArray => [...prevArray,`Gained ${currentMonsterGoldGiven} gold!`])
          setGold(prevGold => prevGold + currentMonsterGoldGiven)
        }
      }
      const fleeLevel = () => {
        if(enemiesDefeated === 0) {
          alert("You can only leave the level after slaying one enemy!")
        }else {
          setEnemiesDefeated(0);
          setTextboxMsgs([""])
          setHealth(maxHealth);
          showGameScreen();
        }
        
      }
      useEffect(() => {
        if(health < 1) {
          alert(`You lost this battle!`);
          showGameScreen();
          setHealth(100);
        }
      },[health])
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
                  attackPlayer();
                }}>Attack</button>
                <button onClick={() => {
                  fleeLevel();
                }}>Flee</button>
                <h2>HP: {health}/{maxHealth}</h2>
                <h2>Gold: {gold} </h2>
            </div>
          </div>
          <div className="textbox-area">
            <h1>Battle Log</h1>
            {textboxMsgs.map((msg,index) => (
              <p key={index}>{msg}</p>
            ))}
          </div>
        </div>
      </>
    )
  
 }

 export default CombatScreen