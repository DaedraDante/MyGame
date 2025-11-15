
function GameScreen({startLevelOne,startLevelTwo,
  startLevelThree,startLevelFour,startLevelFive,
  combatScreen,setCombatScreen,showCombatScreen,
  showMenuScreen,setGameScreen,setMenuScreen,
  showShopScreen,setShopScreen}) {
    return(
      <div className="levels-screen">
        <div className="levels-screen-levels-area">
          <div className="level-area">
              <h2>Level 1</h2>
              <p>Difficulty: Easy</p>
              <button onClick={startLevelOne}>Start</button>
            </div>
            <div className="level-area">
              <h2>Level 2</h2>
              <p>Difficulty: Easy</p>
              <button onClick={startLevelTwo}>Start</button>
            </div>
            <div className="level-area">
              <h2>Level 3</h2>
              <p>Difficulty: Easy</p>
              <button onClick={startLevelThree}>Start</button>
            </div>
            <div className="level-area">
              <h2>Level 4</h2>
              <p>Difficulty: Easy</p>
              <button onClick={startLevelFour}>Start</button>
            </div>
            <div className="level-area">
              <h2>Level 5</h2>
              <p>Difficulty: Medium</p>
              <button onClick={startLevelFive}>Start</button>
            </div>
            <div className="level-area">
              <h2>Level 6</h2>
              <p>Difficulty: Medium</p>
              <button>Start</button>
            </div>
            <div className="level-area">
              <h2>Level 7</h2>
              <p>Difficulty: Medium</p>
              <button>Start</button>
            </div>
            <div className="level-area">
              <h2>Level 8</h2>
              <p>Difficulty: Medium</p>
              <button>Start</button>
            </div>
            <div className="level-area">
              <h2>Level 9</h2>
              <p>Difficulty: Hard</p>
              <button>Start</button>
            </div>
            <div className="level-area">
              <h2>Level 10</h2>
              <p>Difficulty: Hard</p>
              <button>Start</button>
            </div>
            <div className="level-area">
              <h2>Level 11</h2>
              <p>Difficulty: Hard</p>
              <button>Start</button>
            </div>
            <div className="level-area">
              <h2>Level 12</h2>
              <p>Difficulty: Hard</p>
              <button>Start</button>
            </div>
        </div>
        <div className="levels-screen-buttons-area">
            <button onClick={showMenuScreen}>Back to menu</button>
            <button onClick={showShopScreen}>Go to shop</button>
            <button>Stats</button>
        </div>
      </div>
    )
}

export default GameScreen