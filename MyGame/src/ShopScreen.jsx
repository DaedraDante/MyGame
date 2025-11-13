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
    if(gold > weaponsArray[weaponIndex].weaponCost) {
        alert(`bought ${weaponsArray[weaponIndex].weaponName}!`);
        setCurrentWeapon(weaponsArray[weaponIndex].weaponName);
        setDamage(weaponsArray[weaponIndex].weaponDamage);
        setGold(prevGold => prevGold - weaponsArray[weaponIndex].weaponCost);
    }else if(gold < weaponsArray[weaponIndex].weaponCost) {
        alert(`not enough money to buy ${weaponsArray[weaponIndex].weaponName}`)
    }
  }
  const purchaseArmor = (armorIndex) => {
        if(gold > armorsArray[armorIndex].armorCost) {
        alert(`bought ${armorsArray[armorIndex].armorName}!`);
        setCurrentArmor(armorsArray[armorIndex].armorName);
        setHealth(armorsArray[armorIndex].armorValue);
        setGold(prevGold => prevGold - armorsArray[armorIndex].armorCost);
    }else if(gold < armorsArray[armorIndex].armorCost) {
        alert(`not enough money to buy ${armorsArray[armorIndex].armorName}`)
    }
  }
 
  return(
    <div className="shop-screen">
      <div className="shop-inner">
        <div className="weapons-shop">
          <h1>Weapons</h1>
           <div className="item-option">
            <p>{gold} gold</p>
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
            <button onClick={() => {
              purchaseArmor(0);
            }}>10$</button>
          </div>
          <div className="item-option">
            <h2>Chainmail Armor Set</h2>
            <button onClick={() => {
              purchaseArmor(0);
            }}>25$</button>
          </div>
          <div className="item-option">
            <h2>Steel Armor Set</h2>
            <button onClick={() => {
              purchaseArmor(0);
            }}>40$</button>
          </div>
          <div className="item-option">
            <h2>Tungsten Armor Set</h2>
            <button onClick={() => {
              purchaseArmor(0);
            }}>85$</button>
          </div>
          <div className="item-option">
            <h2>Unique Pallastine Armor </h2>
            <button onClick={() => {
              purchaseArmor(0);
            }}>140$</button>
          </div>
          <div className="item-option">
            <h2>Dark Overseer's Galantry Set</h2>
            <button onClick={() => {
              purchaseArmor(0);
            }}>300$</button>
          </div>
        </div>
      </div>
        <button onClick={showGameScreen}>Exit</button>
    </div>
  )
}

export default ShopScreen;
