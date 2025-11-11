 
function ShopScreen({setMenuScreen,setGameScreen,setShopScreen,showGameScreen}) {
  return(
    <div className="shop-screen">
      <div className="shop-inner">
        <div className="weapons-shop">
          <h1>Weapons</h1>
           <div className="item-option">
            <h2>Sharpened Stck</h2>
            <button>10$</button>
          </div>
          <div className="item-option">
            <h2>Copper Shortsword</h2>
            <button>25$</button>
          </div>
          <div className="item-option">
            <h2>Iron Mace</h2>
            <button>40$</button>
          </div>
          <div className="item-option">
            <h2>Black Bone Scythe</h2>
            <button>85$</button>
          </div>
          <div className="item-option">
            <h2>Flaming Platinum Staff</h2>
            <button>140$</button>
          </div>
          <div className="item-option">
            <h2>Scepter of doom</h2>
            <button>300$</button>
          </div>
        </div>
        <div className="armor-shop">
          <h1>Armor</h1>
          <div className="item-option">
            <h2>Old Worn Leather Suit</h2>
            <button>10$</button>
          </div>
          <div className="item-option">
            <h2>Chainmail Armor Set</h2>
            <button>25$</button>
          </div>
          <div className="item-option">
            <h2>Steel Armor Set</h2>
            <button>40$</button>
          </div>
          <div className="item-option">
            <h2>Tungsten Armor Set</h2>
            <button>85$</button>
          </div>
          <div className="item-option">
            <h2>Unique Pallastine Armor </h2>
            <button>140$</button>
          </div>
          <div className="item-option">
            <h2>Dark Overseer's Galantry Set</h2>
            <button>300$</button>
          </div>
        </div>
      </div>
        <button onClick={showGameScreen}>Exit</button>
    </div>
  )
}

export default ShopScreen;
