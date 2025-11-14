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
        <div className="stats-window">
          <h2>Stats</h2>
          <p>Gold: {gold}</p>
          <p>Max Health: {health}</p>
          <p>Weapon: {currentWeapon}</p>
          <p>Armor: {currentArmor}</p>
          </div>
        <div className="weapons-shop">
          <h1>Weapons</h1>
          <div className="item-options">
              <div className="item-option">
                <h2>{weaponsArray[0].weaponName}</h2>
                <p>Damage: {weaponsArray[0].weaponDamage}</p>
                <button onClick={() => {
                  purchaseWeapon(0);
                }}>10$</button>
              </div>
              <div className="item-option">
                <h2>{weaponsArray[1].weaponName}</h2>
                <p>Damage: {weaponsArray[1].weaponDamage}</p>
                  <button onClick={() => {
                  purchaseWeapon(1);
                }}>25$</button>
              </div>
              <div className="item-option">
                <h2>{weaponsArray[2].weaponName}</h2>
                <p>Damage: {weaponsArray[2].weaponDamage}</p>
                  <button onClick={() => {
                  purchaseWeapon(2);
                }}>40$</button>
              </div>
              <div className="item-option">
                <h2>{weaponsArray[3].weaponName}</h2>
                <p>Damage: {weaponsArray[3].weaponDamage}</p>
                  <button onClick={() => {
                  purchaseWeapon(3);
                }}>85$</button>
              </div>
              <div className="item-option">
                <h2>{weaponsArray[4].weaponName}</h2>
                <p>Damage: {weaponsArray[4].weaponDamage}</p>
                  <button onClick={() => {
                  purchaseWeapon(4);
                }}>140$</button>
              </div>
              <div className="item-option">
                <h2>{weaponsArray[5].weaponName}</h2>
                <p>Damage: {weaponsArray[5].weaponDamage}</p>
                  <button onClick={() => {
                  purchaseWeapon(5);
                }}>300$</button>
              </div>
          </div>
        </div>
        <div className="armor-shop">
          <h1>Armor</h1>
          <div className="item-options">
                <div className="item-option">
            <h2>{armorsArray[0].armorName}</h2>
            <p>+{armorsArray[0].armorValue} Max Health</p>
            <button onClick={() => {
              purchaseArmor(0);
            }}>10$</button>
          </div>
          <div className="item-option">
            <h2>{armorsArray[1].armorName}</h2>
            <p>+{armorsArray[1].armorValue} Max Health</p>
            <button onClick={() => {
              purchaseArmor(0);
            }}>25$</button>
          </div>
          <div className="item-option">
            <h2>{armorsArray[2].armorName}</h2>
            <p>+{armorsArray[2].armorValue} Max Health</p>
            <button onClick={() => {
              purchaseArmor(0);
            }}>40$</button>
          </div>
          <div className="item-option">
            <h2>{armorsArray[3].armorName}</h2>
            <p>+{armorsArray[3].armorValue} Max Health</p>
            <button onClick={() => {
              purchaseArmor(0);
            }}>85$</button>
          </div>
          <div className="item-option">
            <h2>{armorsArray[4].armorName}</h2>
            <p>+{armorsArray[4].armorValue} Max Health</p>
            <button onClick={() => {
              purchaseArmor(0);
            }}>140$</button>
          </div>
          <div className="item-option">
            <h2>{armorsArray[5].armorName}</h2>
            <p>+{armorsArray[5].armorValue} Max Health</p>
            <button onClick={() => {
              purchaseArmor(0);
            }}>300$</button>
          </div>
          </div>
        </div>
      </div>
        <button onClick={showGameScreen}>Exit</button>
    </div>
  )
}

export default ShopScreen;
