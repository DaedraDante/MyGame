import { useState } from 'react'
import MenuScreen from './MenuScreen'
import GameScreen from './GameScreen'
import ShopScreen from './ShopScreen'
function App() {

  const [menuScreen,setMenuScreen] = useState(true);
  const [gameScreen,setGameScreen] = useState(false);
  const [shopScreen,setShopScreen] = useState(false);

  const showGameScreen = () => {
    setMenuScreen(false);
    setShopScreen(false);
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
      /> : null}
      {shopScreen ? <ShopScreen
      setShopScreen={setShopScreen}
      setMenuScreen={setMenuScreen}
      setGameScreen={setGameScreen}
      showGameScreen={showGameScreen}/> : null}
    </>
  )
}

export default App
