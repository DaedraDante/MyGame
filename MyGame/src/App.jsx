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
  };
  const showShopScreen = () => {
    setGameScreen(false);
    setShopScreen(true);
  };
  const showMenuScreen = () => {
    setGameScreen(false);
    setMenuScreen(true);
  };
  const showCombatScreen = () => {
    setGameScreen(false);
    setCombatScreen(true);
  };

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
const [currentWeapon,setCurrentWeapon] = useState(() => {
  const savedCurrentWeapon = localStorage.getItem("currentWeapon");
  return savedCurrentWeapon ? JSON.parse(savedCurrentWeapon) : "fist";
});
const [currentArmor,setCurrentArmor] = useState(() => {
  const savedCurrentArmor = localStorage.getItem("currentArmor");
  return savedCurrentArmor ? JSON.parse(savedCurrentArmor) : "Old";
});

// player variables, setting to local storage
  useEffect(() => {
    localStorage.setItem("gold",JSON.stringify(gold));
    localStorage.setItem("health",JSON.stringify(health));
    localStorage.setItem("damage",JSON.stringify(damage));
    localStorage.setItem("currentWeapon",JSON.stringify(currentWeapon));
    localStorage.setItem("currentArmor",JSON.stringify(currentArmor));
  },[gold,health,damage]);  

// textbox logic
const [textboxMsgs,setTextboxMsgs] = useState([""]);

// shop logic
const [weaponsArray,setWeaponsArray] = useState([
  {weaponName:"Sharpened Stick",
   weaponDamage:2,
   weaponCost:10
  },
  {weaponName:"Copper Shortsword",
   weaponDamage:5,
   weaponCost:25
  },  
  {weaponName:"Iron Mace",
   weaponDamage:9,
   weaponCost:40
  },  
  {weaponName:"Black Bone Scythe",
   weaponDamage:14,
   weaponCost:85
  },  
  {weaponName:"Flaming Platinum Staff",
   weaponDamage:20,
   weaponCost:140
  },  
  {weaponName:"Scepter Of Doom",
   weaponDamage:35,
   weaponCost:300
  },
]);
const [armorsArray,setArmorsArray] = useState([
  {
    armorName:"Old Worn Leather Suit",
    armorValue:1,
    armorCost:10
  },
   {
    armorName:"Chainmail Armor Set",
    armorValue:3,
    armorCost:25
  },
   {
    armorName:"Old Worn Leather Suit",
    armorValue:5,
    armorCost:40
  },
   {
    armorName:"Old Worn Leather Suit",
    armorValue:10,
    armorCost:85
  },
   {
    armorName:"Old Worn Leather Suit",
    armorValue:14,
    armorCost:140
  },
   {
    armorName:"Old Worn Leather Suit",
    armorValue:20,
    armorCost:300
  }
]);
const [selectedShopWeapon,setSelectedShopWeapon] = useState("");
const [selectedShopArmor,setSelectedShopArmor] = useState("");
// monster variables
const [currentMonster,setCurrentMonster] = useState("none")
const [currentMonsterId,setCurrentMonsterId] = useState(0);
const [currentMonsterName,setCurrentMonsterName] = useState(null);
const [currentMonsterImg,setCurrentMonsterImg] = useState("src");
const [currentMonsterHealth,setCurrentMonsterHealth] = useState(9999);
const [currentMonsterDamage,setCurrentMonsterDamage] = useState(0);
const [currentMonsterGoldGiven,setCurrentMonsterGoldGiven] = useState(0);
const [MonstersArray,setMonstersArray] = useState([
  {
    monsterId:1,
    monsterName:"Chub Slime",
    monsterImg:"monsterImage",
    monsterHealth:5,
    monsterDamage:3,
    monsterGoldGiven:2
  },  {
    monsterId:2,
    monsterName:"Gray Boar",
    monsterImg:"monsterImage",
    monsterHealth:18,
    monsterDamage:6,
    monsterGoldGiven:8
  },  {
    monsterId:3,
    monsterName:"Fanged Wolf",
    monsterImg:"monsterImage",
    monsterHealth:32,
    monsterDamage:11,
    monsterGoldGiven:14
  },  {
    monsterId:4,
    monsterName:"Grub Goblin",
    monsterImg:"monsterImage",
    monsterHealth:50,
    monsterDamage:18,
    monsterGoldGiven:28
  },  {
    monsterId:5,
    monsterName:"Bloody Dire Wolf",
    monsterImg:"monsterImage",
    monsterHealth:75,
    monsterDamage:26,
    monsterGoldGiven:38
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

const spawnChubSlime = () => {
  setCurrentMonsterName(MonstersArray[0].monsterName);
  setCurrentMonsterHealth(MonstersArray[0].monsterHealth);
  setCurrentMonsterGoldGiven(MonstersArray[0].monsterGoldGiven);
  setCurrentMonsterDamage(MonstersArray[0].monsterDamage);
}
const spawnGrayBoar = () => {
  setCurrentMonsterName(MonstersArray[1].monsterName);
  setCurrentMonsterHealth(MonstersArray[1].monsterHealth);
  setCurrentMonsterGoldGiven(MonstersArray[1].monsterGoldGiven);
  setCurrentMonsterDamage(MonstersArray[1].monsterDamage);
}
const spawnFangedWolf = () => {
  setCurrentMonsterName(MonstersArray[2].monsterName);
  setCurrentMonsterHealth(MonstersArray[2].monsterHealth);
  setCurrentMonsterGoldGiven(MonstersArray[2].monsterGoldGiven);
  setCurrentMonsterDamage(MonstersArray[2].monsterDamage);
}
const spawnGrubGoblin = () => {
  setCurrentMonsterName(MonstersArray[3].monsterName);
  setCurrentMonsterHealth(MonstersArray[3].monsterHealth);
  setCurrentMonsterGoldGiven(MonstersArray[3].monsterGoldGiven);
  setCurrentMonsterDamage(MonstersArray[3].monsterDamage);
}
const spawnBloodyDireWolf = () => {
  setCurrentMonsterName(MonstersArray[4].monsterName);
  setCurrentMonsterHealth(MonstersArray[4].monsterHealth);
  setCurrentMonsterGoldGiven(MonstersArray[4].monsterGoldGiven);
  setCurrentMonsterDamage(MonstersArray[4].monsterDamage);
}
  // level variables
const [currentLevel,setCurrentLevel] = useState("");
const [enemiesRemaining,setEnemiesRemaining] = useState(1);
const [enemiesDefeated,setEnemiesDefeated] = useState(0);

// start level functions
  useEffect(() => {
    if(currentLevel === 1) {
      if(enemiesDefeated === 0) {
        spawnChubSlime();
      }else if(enemiesDefeated === 1) {
        spawnChubSlime();
      }else if(enemiesDefeated === 2) {
        spawnGrayBoar();
      }else if(enemiesDefeated === 3) {
        setEnemiesDefeated(0);
        alert("Success you finished the level!")
        showGameScreen();
      } 
    }
    if(currentLevel === 2) {
      if(enemiesDefeated === 0) {
        spawnGrayBoar();
      }else if(enemiesDefeated === 1) {
        spawnFangedWolf();
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
  function startLevelTwo() {
    setCurrentLevel(2);
    showCombatScreen()
  }
  function startLevelThree() {
    setCurrentLevel(3);
    showCombatScreen()
  }
  function startLevelFour() {
    setCurrentLevel(4);
    showCombatScreen()
  }
  function startLevelFive() {
    setCurrentLevel(5);
    showCombatScreen()
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
      startLevelTwo={startLevelTwo}
      startLevelThree={startLevelThree}
      startLevelFour={startLevelFour}
      startLevelFive={startLevelFive}
      /> : null}
      {shopScreen ? <ShopScreen
      setShopScreen={setShopScreen}
      setMenuScreen={setMenuScreen}
      setGameScreen={setGameScreen}
      showGameScreen={showGameScreen}
      weaponsArray={weaponsArray}
      setWeaponsArray={setWeaponsArray}
      armorsArray={armorsArray}
      setArmorsArray={setArmorsArray}
      damage={damage}
      setDamage={setDamage}
      health={health}
      setHealth={setHealth}
      gold={gold}
      setGold={setGold}
      currentWeapon={currentWeapon}
      setCurrentWeapon={setCurrentWeapon}
      currentArmor={currentArmor}
      setCurrentArmor={setCurrentArmor}
      /> : null}

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
      /> : null}
    </>
  )
}

export default App
