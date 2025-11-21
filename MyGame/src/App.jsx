import { useState,useEffect } from 'react'
import MenuScreen from './MenuScreen'
import GameScreen from './GameScreen'
import ShopScreen from './ShopScreen'
import CombatScreen from './CombatScreen'
import StatsScreen from './StatsScreen'

function App() {


  // screens/windows
  const [menuScreen,setMenuScreen] = useState(true);
  const [gameScreen,setGameScreen] = useState(false);
  const [shopScreen,setShopScreen] = useState(false);
  const [combatScreen,setCombatScreen] = useState(false);
  const [statsScreen,setStatsScreen] = useState(false);

  const showGameScreen = () => {
    setMenuScreen(false);
    setShopScreen(false);
    setCombatScreen(false);
    setStatsScreen(false);
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
  const showStatsScreen = () => {
    setGameScreen(false);
    setStatsScreen(true);
  }

  // stats variables
  const [levelsCompleted,setLevelsCompleted] = useState(() => {
    const savedLevelsCompleted = localStorage.getItem("levelsCompleted");
    return savedLevelsCompleted ? JSON.parse(savedLevelsCompleted) : 0;
  });
  const [totalDamageDealt,setTotalDamageDealt] = useState(() => {
    const savedTotalDamageDealt = localStorage.getItem("totalDamageDealt");
    return savedTotalDamageDealt ? JSON.parse(savedTotalDamageDealt) : 0;
  });
  const [playerKills,setPlayerKills] = useState(() => {
    const savedPlayerKills = localStorage.getItem("playerKills");
    return savedPlayerKills ? JSON.parse(savedPlayerKills) : 0;
  });
  const [totalGoldGained,setTotalGoldGained] = useState(() => {
    const savedTotalGoldGained = localStorage.getItem("totalGoldGained");
    return savedTotalGoldGained ? JSON.parse(savedTotalGoldGained) : 0;
  });
  const [totalGoldSpent,setTotalGoldSpent] = useState(() => {
    const savedTotalGoldSpent = localStorage.getItem("totalGoldSpent");
    return savedTotalGoldSpent ? JSON.parse(savedTotalGoldSpent) : 0;
  });
  
  // player variables, retrieval from local storage

const [health, setHealth] = useState(() => {
  const savedHealth = localStorage.getItem("health");
  return savedHealth ? JSON.parse(savedHealth) : 100;
});
const [maxHealth, setMaxHealth] = useState(() => {
  const savedMaxHealth = localStorage.getItem("maxHealth");
  return savedMaxHealth ? JSON.parse(savedMaxHealth) : 100;
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
  return savedCurrentWeapon ? JSON.parse(savedCurrentWeapon) : "Fist";
});
const [currentArmor,setCurrentArmor] = useState(() => {
  const savedCurrentArmor = localStorage.getItem("currentArmor");
  return savedCurrentArmor ? JSON.parse(savedCurrentArmor) : "Old T-shirt";
});


//  setting variables to local storage

  useEffect(() => {
    localStorage.setItem("gold",JSON.stringify(gold));
    localStorage.setItem("health", JSON.stringify(health));
    localStorage.setItem("maxHealth",JSON.stringify(maxHealth));
    localStorage.setItem("damage",JSON.stringify(damage));
    localStorage.setItem("currentWeapon",JSON.stringify(currentWeapon));
    localStorage.setItem("currentArmor",JSON.stringify(currentArmor));
    localStorage.setItem("levelsCompleted",JSON.stringify(levelsCompleted));
    localStorage.setItem("totalDamageDealt",JSON.stringify(totalDamageDealt));
    localStorage.setItem("playerKills",JSON.stringify(playerKills));
    localStorage.setItem("totalGoldGained",JSON.stringify(totalGoldGained));
    localStorage.setItem("totalGoldSpent",JSON.stringify(totalGoldSpent));
  },[gold,maxHealth,damage,currentWeapon,currentArmor,levelsCompleted,
    totalDamageDealt,playerKills,totalGoldGained,totalGoldSpent]);  


// textbox variables

const [textboxMsgs,setTextboxMsgs] = useState([]);


// shop variables

const [weaponsArray,setWeaponsArray] = useState([
  {weaponName:"Sharpened Stick",
   weaponDamage:2,
   weaponCost:10,
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
  }
]);
const [armorsArray,setArmorsArray] = useState([
  {
    armorName:"Worn Leather Suit",
    armorValue:5,
    armorCost:20
  },
   {
    armorName:"Chainmail Armor Set",
    armorValue:25,
    armorCost:60
  },
   {
    armorName:"Steel Armor Set",
    armorValue:40,
    armorCost:100
  },
   {
    armorName:"Tungsten Armor Set",
    armorValue:75,
    armorCost:240
  },
   {
    armorName:"Diamantine Armor set",
    armorValue:125,
    armorCost:400
  },
   {
    armorName:"Paladin's Armor set",
    armorValue:200,
    armorCost:700
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
    monsterGoldGiven:4
  },  {
    monsterId:2,
    monsterName:"Gray Boar",
    monsterImg:"monsterImage",
    monsterHealth:18,
    monsterDamage:6,
    monsterGoldGiven:10
  },  {
    monsterId:3,
    monsterName:"Fanged Wolf",
    monsterImg:"monsterImage",
    monsterHealth:32,
    monsterDamage:11,
    monsterGoldGiven:24
  },  {
    monsterId:4,
    monsterName:"Grub Goblin",
    monsterImg:"monsterImage",
    monsterHealth:50,
    monsterDamage:18,
    monsterGoldGiven:38
  },  {
    monsterId:5,
    monsterName:"Bloody Dire Wolf",
    monsterImg:"monsterImage",
    monsterHealth:75,
    monsterDamage:26,
    monsterGoldGiven:55
  },  {
    monsterId:6,
    monsterName:"Hungry Orc",
    monsterImg:"monsterImage",
    monsterHealth:125,
    monsterDamage:35,
    monsterGoldGiven:90
  },  {
    monsterId:7,
    monsterName:"Drakeling",
    monsterImg:"monsterImage",
    monsterHealth:190,
    monsterDamage:50,
    monsterGoldGiven:110
  },  {
    monsterId:8,
    monsterName:"Brood Arachna",
    monsterImg:"monsterImage",
    monsterHealth:280,
    monsterDamage:75,
    monsterGoldGiven:160
  },  
])
// spawn monster functions

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
const spawnHungryOrc = () => {
  setCurrentMonsterName(MonstersArray[5].monsterName);
  setCurrentMonsterHealth(MonstersArray[5].monsterHealth);
  setCurrentMonsterGoldGiven(MonstersArray[5].monsterGoldGiven);
  setCurrentMonsterDamage(MonstersArray[5].monsterDamage);
}
const spawnDrakeling = () => {
  setCurrentMonsterName(MonstersArray[6].monsterName);
  setCurrentMonsterHealth(MonstersArray[6].monsterHealth);
  setCurrentMonsterGoldGiven(MonstersArray[6].monsterGoldGiven);
  setCurrentMonsterDamage(MonstersArray[6].monsterDamage);
}
const spawnBroodArachna = () => {
  setCurrentMonsterName(MonstersArray[7].monsterName);
  setCurrentMonsterHealth(MonstersArray[7].monsterHealth);
  setCurrentMonsterGoldGiven(MonstersArray[7].monsterGoldGiven);
  setCurrentMonsterDamage(MonstersArray[7].monsterDamage);
}


  // level variables
const [currentLevel,setCurrentLevel] = useState("");
const [enemiesRemaining,setEnemiesRemaining] = useState(1);
const [enemiesDefeated,setEnemiesDefeated] = useState(0);

const finishLevel = () => {
    alert(`Completed level ${currentLevel}!`)
    setEnemiesDefeated(0);
    setHealth(maxHealth);
    setLevelsCompleted(prevLevelsCompleted => prevLevelsCompleted + 1)
    showGameScreen();
}
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
        finishLevel();
      } 
    }
    if(currentLevel === 2) {
      if(enemiesDefeated === 0) {
        spawnGrayBoar();
      }else if(enemiesDefeated === 1) {
        spawnFangedWolf();
      }else if(enemiesDefeated === 2) {
        finishLevel();
      } 
    }
    if(currentLevel === 3) {
      if(enemiesDefeated === 0) {
        spawnFangedWolf();
      }else if(enemiesDefeated === 1) {
        spawnFangedWolf();
      }else if(enemiesDefeated === 2) {
        spawnGrubGoblin();
      }else if(enemiesDefeated === 3) {
        finishLevel();
      }
    }
    if(currentLevel === 4) {
      if(enemiesDefeated === 0) {
        spawnGrubGoblin();
      }else if(enemiesDefeated === 1) {
        spawnBloodyDireWolf();
      }else if(enemiesDefeated === 2) {
        spawnBloodyDireWolf();
      }else if(enemiesDefeated === 3) {
        finishLevel();
      }
    }
   if(currentLevel === 5) {
      if(enemiesDefeated === 0) {
        spawnHungryOrc();
      }else if(enemiesDefeated === 1) {
        spawnHungryOrc();
      }else if(enemiesDefeated === 2) {
        spawnHungryOrc();
      }else if(enemiesDefeated === 3) {
        finishLevel();
      }
    }
   if(currentLevel === 6) {
      if(enemiesDefeated === 0) {
        spawnBloodyDireWolf();
      }else if(enemiesDefeated === 1) {
        spawnHungryOrc();
      }else if(enemiesDefeated === 2) {
        spawnDrakeling();
      }else if(enemiesDefeated === 3) {
        finishLevel();
      }
    }
   if(currentLevel === 7) {
      if(enemiesDefeated === 0) {
        spawnDrakeling();
      }else if(enemiesDefeated === 1) {
        spawnDrakeling();
      }else if(enemiesDefeated === 2) {
        spawnBroodArachna();
      }else if(enemiesDefeated === 3) {
        finishLevel();
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
  function startLevelSix() {
    setCurrentLevel(6);
    showCombatScreen();
  }
  function startLevelSeven() {
    setCurrentLevel(7);
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
      statsScreen={statsScreen}
      setStatsScreen={setStatsScreen}
      showStatsScreen={showStatsScreen}
      startLevelOne={startLevelOne}
      startLevelTwo={startLevelTwo}
      startLevelThree={startLevelThree}
      startLevelFour={startLevelFour}
      startLevelFive={startLevelFive}
      startLevelSix={startLevelSix}
      startLevelSeven={startLevelSeven}
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
      maxHealth={maxHealth}
      setMaxHealth={setMaxHealth}
      setTotalGoldSpent={setTotalGoldSpent}
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
      currentMonsterDamage={currentMonsterDamage}
      setCurrentMonsterDamage={setCurrentMonsterDamage}
      damage={damage}
      enemiesDefeated={enemiesDefeated}
      setEnemiesDefeated={setEnemiesDefeated}
      maxHealth={maxHealth}
      setMaxHealth={setMaxHealth}
      textboxMsgs={textboxMsgs}
      setTextboxMsgs={setTextboxMsgs}
      setTotalDamageDealt={setTotalDamageDealt}
      setTotalGoldGained={setTotalGoldGained}
      setPlayerKills={setPlayerKills}
      setLevelsCompleted={setLevelsCompleted}
      /> : null}

      {statsScreen ? <StatsScreen 
      showGameScreen={showGameScreen}
      levelsCompleted={levelsCompleted}
      totalDamageDealt={totalDamageDealt}
      totalGoldGained={totalGoldGained}
      totalGoldSpent={totalGoldSpent}
      playerKills={playerKills}
      /> : null}
    </>
  )
}

export default App
