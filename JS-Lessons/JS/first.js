'use strict';

function task1()
{
    let admin;
    const name = "Іван";
    admin = name;
    alert(admin);
}

function task2()
{
    let ourPlanetName = "Земля";
    alert(ourPlanetName);
    let currentUser = "Іван";
    alert(`${currentUser} + ${currentUser.toUpperCase()}`);
}

const b = Boolean(false);
const b1 = false;

console.log(!!b, b ? 'true' : 'false', b == true); 
// ?

console.log(!!b1, b1 ? 'true' : 'false', b1 == true);
// ?

