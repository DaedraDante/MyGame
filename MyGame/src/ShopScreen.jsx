import { useState,useEffect } from "react";
function ShopScreen({setMenuScreen,setGameScreen,
  setShopScreen,showGameScreen,
weaponsArray,setWeaponsArray,
armorsArray,setArmorsArray,
selectedShopWeapon,setSelectedShopWeapon,
selectedShopArmor,setSelectedShopArmor,
damage,setDamage,health,setHealth,gold,setGold,
currentWeapon,setCurrentWeapon,currentArmor,setCurrentArmor}) {

  //  useEffect(() => {
  //   setSelectedShopWeapon(selectedShopWeapon);
  // },[selectedShopWeapon]);

  const purchaseWeapon = (weaponIndex) => {
    if(gold > 22) {
        // setCurrentWeapon(weaponsArray[weaponIndex.weaponName]);
        // setDamage(weaponsArray[weaponIndex.weaponDamage]);
        // setGold(prevGold => prevGold - weaponsArray[weaponIndex.weaponCost]);
        alert(`hello`);
    }
  }
  const purchaseArmor = (selectedShopArmor) => {
    console.log(armorsArray[selectedShopArmor].armorValue);
  }
 
  return(
    <div className="shop-screen">
      <div className="shop-inner">
        <div className="weapons-shop">
          <h1>Weapons</h1>
           <div className="item-option">
            <h2>Sharpened Stick</h2>
            <button onClick={() => {
              purchaseWeapon(0);
            }}>10$</button>
          </div>
          <div className="item-option">
            <h2>Copper Shortsword</h2>
              <button onClick={() => {
              purchaseWeapon(1);
            }}>25$</button>
          </div>
          <div className="item-option">
            <h2>Iron Mace</h2>
              <button onClick={() => {
              purchaseWeapon(2);
            }}>40$</button>
          </div>
          <div className="item-option">
            <h2>Black Bone Scythe</h2>
              <button onClick={() => {
              purchaseWeapon(3);
            }}>85$</button>
          </div>
          <div className="item-option">
            <h2>Flaming Platinum Staff</h2>
              <button onClick={() => {
              purchaseWeapon(4);
            }}>140$</button>
          </div>
          <div className="item-option">
            <h2>Scepter Of Doom</h2>
              <button onClick={() => {
              purchaseWeapon(5);
            }}>300$</button>
          </div>
        </div>
        <div className="armor-shop">
          <h1>Armor</h1>
          <div className="item-option">
            <h2>Old Worn Leather Suit</h2>
            <button onClick={purchaseArmor}>10$</button>
          </div>
          <div className="item-option">
            <h2>Chainmail Armor Set</h2>
            <button onClick={purchaseArmor}>25$</button>
          </div>
          <div className="item-option">
            <h2>Steel Armor Set</h2>
            <button onClick={purchaseArmor}>40$</button>
          </div>
          <div className="item-option">
            <h2>Tungsten Armor Set</h2>
            <button onClick={purchaseArmor}>85$</button>
          </div>
          <div className="item-option">
            <h2>Unique Pallastine Armor </h2>
            <button onClick={purchaseArmor}>140$</button>
          </div>
          <div className="item-option">
            <h2>Dark Overseer's Galantry Set</h2>
            <button onClick={purchaseArmor}>300$</button>
          </div>
        </div>
      </div>
        <button onClick={showGameScreen}>Exit</button>
    </div>
  )
}

export default ShopScreen;
