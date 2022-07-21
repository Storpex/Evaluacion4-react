import uuid from "react-uuid";

export const getListWeapons = () => {
  if (!localStorage["@weapons"]) {
    localStorage["@weapons"] = JSON.stringify([]);
  }
  let weapons = JSON.parse(localStorage['@weapons'])
  return weapons;
}

export const addWeapon = (weapon) => {
  const weapons = getListWeapons();
  weapons.push({id: uuid() ,...weapon});
  localStorage['@weapons'] = JSON.stringify(weapons);
}

export const getWeaponId = (id) => {
  const weapons = getListWeapons();
  const weapon = weapons.find((weapon) => weapon.id === id);
  return weapon;
};

export const editWeapon = (id, newWeapon) => {
  let weapons = getListWeapons();
  weapons = weapons.filter((weapon) => weapon.id !== id);
  weapons.push(newWeapon);
  localStorage["@weapons"] = JSON.stringify(weapons);
};

export const deleteWeapon = (id) => {
  let weapons = getListWeapons();
  weapons = weapons.filter((weapon) => weapon.id !== id);
  localStorage["@weapons"] = JSON.stringify(weapons);
};