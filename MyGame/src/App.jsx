import { useState,useEffect } from 'react'
import MenuScreen from './MenuScreen'
import GameScreen from './GameScreen'
import ShopScreen from './ShopScreen'
import CombatScreen from './CombatScreen'
function App() {

  // screens/windows
  const [menuScreen,setMenuScreen] = useState(true);
  const [gameScreen,setGameScreen] = useState(false);
  const [shopScreen,setShopScreen] = useState(false);
  const [combatScreen,setCombatScreen] = useState(false);

  const showGameScreen = () => {
    setMenuScreen(false);
    setShopScreen(false);
    setCombatScreen(false);
    setGameScreen(true);
  }
  const showShopScreen = () => {
    setGameScreen(false);
    setShopScreen(true);
  }
  const showMenuScreen = () => {
    setGameScreen(false);
    setMenuScreen(true);
  }
  const showCombatScreen = () => {
    setGameScreen(false);
    setCombatScreen(true);
  }

  // player variables, retrieval from local storage
const [health,setHealth] = useState(() => {
  const savedHealth = localStorage.getItem("health");
  return savedHealth ? JSON.parse(savedHealth) : 100;
});
const [gold,setGold] = useState(() => {
  const savedGold = localStorage.getItem("gold");
  return savedGold ? JSON.parse(savedGold) : 0;
});
const [damage,setDamage] = useState(() => {
  const savedDamage = localStorage.getItem("damage");
  return savedDamage ? JSON.parse(savedDamage) : 1;
});

// player variables, setting to local storage
  useEffect(() => {
    localStorage.setItem("gold",JSON.stringify(gold));
    localStorage.setItem("health",JSON.stringify(health));
    localStorage.setItem("damage",JSON.stringify(damage));
  },[gold,health,damage]);  

  // monster variables
const [currentMonster,setCurrentMonster] = useState("none")
const [currentMonsterId,setCurrentMonsterId] = useState(0);
const [currentMonsterName,setCurrentMonsterName] = useState("Slime");
const [currentMonsterImg,setCurrentMonsterImg] = useState("src");
const [currentMonsterHealth,setCurrentMonsterHealth] = useState(10);
const [currentMonsterDamage,setCurrentMonsterDamage] = useState(0);
const [currentMonsterGoldGiven,setCurrentMonsterGoldGiven] = useState(0);
const [MonstersArray,setMonstersArray] = useState([
  {
    monsterId:1,
    monsterName:"Slime",
    monsterImg:"monsterImage",
    monsterHealth:"10",
    monsterDamage:3,
    monsterGold:"5"
  }
])
// const [levelArray,setLevelArray] = useState([
//   {
//     level:1,
//     enemyOrder:`${slime} ${slime}`,
//     levelGoldReward:12
//   }
// ])
  //spawn monster functions

const spawnSlime = () => {
  setCurrentMonsterName("Slime");
  setCurrentMonsterHealth(10);
  setCurrentMonsterGoldGiven(3);
}
const spawnWolf = () => {
  setCurrentMonsterName("Wolf");
  setCurrentMonsterHealth(25);
  setCurrentMonsterGoldGiven(15);
}
  // level variables
const [currentLevel,setCurrentLevel] = useState("");
const [enemiesRemaining,setEnemiesRemaining] = useState(1);
const [enemiesDefeated,setEnemiesDefeated] = useState(0);

// start level functions
  useEffect(() => {
    if(currentLevel === 1) {
      if(enemiesDefeated === 0) {
        spawnSlime();
      }else if(enemiesDefeated === 1) {
        spawnWolf();
      }else if(enemiesDefeated === 2) {
        setEnemiesDefeated(0);
        alert("Success you finished the level!")
        showGameScreen();
      } 
    }
  },[currentLevel,enemiesDefeated])


  function startLevelOne() {
    setCurrentLevel(1);
    showCombatScreen();
  }

  return (
    <>
      {menuScreen ? <MenuScreen
      menuScreen={menuScreen}
      setMenuScreen={setMenuScreen}
      gameScreen={gameScreen}
      setGameScreen={setGameScreen}
      setShopScreen={setShopScreen}
      showGameScreen={showGameScreen}/> : null}
      {gameScreen ? <GameScreen
      showMenuScreen={showMenuScreen}
      setMenuScreen={setMenuScreen}
      setGameScreen={setGameScreen}
      setShopScreen={setShopScreen}
      showShopScreen={showShopScreen}
      combatScreen={combatScreen}
      setCombatScreen={setCombatScreen}
      showCombatScreen={showCombatScreen}
      startLevelOne={startLevelOne}
      /> : null}
      {shopScreen ? <ShopScreen
      setShopScreen={setShopScreen}
      setMenuScreen={setMenuScreen}
      setGameScreen={setGameScreen}
      showGameScreen={showGameScreen}/> : null}
      {combatScreen ? <CombatScreen
      health={health}
      setHealth={setHealth}
      gold={gold}
      setGold={setGold}
      gameScreen={gameScreen}
      setGameScreen={setGameScreen}
      showGameScreen={showGameScreen}
      currentMonsterName={currentMonsterName}
      setCurrentMonsterName={setCurrentMonsterName}
      currentMonsterHealth={currentMonsterHealth}
      setCurrentMonsterHealth={setCurrentMonsterHealth}
      currentMonsterGoldGiven={currentMonsterGoldGiven}
      setCurrentMonsterGoldGiven={setCurrentMonsterGoldGiven}
      damage={damage}
      enemiesDefeated={enemiesDefeated}
      setEnemiesDefeated={setEnemiesDefeated}
      spawnSlime={spawnSlime}
      spawnWolf={spawnWolf}
      /> : null}
    </>
  )
}

export default App
