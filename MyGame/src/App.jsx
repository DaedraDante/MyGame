import { useState } from 'react'
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

  // player variables
const [health,setHealth] = useState(100);
const [gold,setGold] = useState(0);

  // monster variables
const [currentMonster,setCurrentMonster] = useState("none")
const [currentMonsterId,setCurrentMonsterId] = useState(0);
const [currentMonsterName,setCurrentMonsterName] = useState("");
const [currentMonsterImg,setCurrentMonsterImg] = useState("src");
const [currentMonsterHealth,setCurrentMosterHealth] = useState(0);
const [currentMonsterDamage,setCurrentMonsterDamage] = useState(0);
const [currentMonsterGold,setCurrentMonsterGold] = useState(0);
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
  // level variables
const [currentLevel,setCurrentLevel] = useState("")

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
      /> : null}
      {shopScreen ? <ShopScreen
      setShopScreen={setShopScreen}
      setMenuScreen={setMenuScreen}
      setGameScreen={setGameScreen}
      showGameScreen={showGameScreen}/> : null}
      {combatScreen ? <CombatScreen
      gameScreen={gameScreen}
      setGameScreen={setGameScreen}
      showGameScreen={showGameScreen}
      /> : null}
    </>
  )
}

export default App
