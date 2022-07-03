const point = <HTMLDivElement>document.querySelector(".target");
const money = <HTMLSpanElement>document.querySelector(".money");
const dps = <HTMLSpanElement>document.querySelector(".dps");
const restart = <HTMLButtonElement>document.querySelector(".restart-button");
// const ok = <HTMLButtonElement>document.querySelector(".confirm-button");
const loadingScreen = <HTMLDivElement>document.querySelector(".loading-screen");
// const afkAlert = <HTMLDivElement>document.querySelector(".afk-alert");
const weaponAmount = <NodeList>document.querySelectorAll(".amount");
const BuyWeapon = <NodeList>document.querySelectorAll(`.weapon-buy`);
const weaponsList = new Map<string, Weapon>();

//window.onload = Continue; //загрузка сохранения при открытии
//window.onbeforeunload = Save; //сохнанение при закрытии
import "./styles/style.css";
import "./gif/bg.gif";
import "./png/bg.png";
import "./png/chest.png";
import "./png/weapon-1.png";
import "./png/weapon-2.png";
import "./png/weapon-3.png";
import "./png/weapon-3.png";
import "./png/weapon-4.png";
import "./png/weapon-5.png";
import "./png/target-background.png";

class Weapon {
    cost: number;
    dps: number;
    amount: number;

    constructor(cost: number, dps: number, amount: number = 0) {
        this.cost = cost;
        this.dps = dps;
        this.amount = amount;
    }

    increaseAmount() {
        this.amount++;
    }

    restart() {
        this.amount = 0;
    }
}

const defaultWeapons: WeaponOptions[] = [{
    name: "knife",
    instance: new Weapon(10, 1)
}, {
    name: "bow",
    instance: new Weapon(100, 10)
}, {
    name: "hammer",
    instance: new Weapon(500, 50)
}, {
    name: "sword",
    instance: new Weapon(1000, 100)
}, {
    name: "pistol",
    instance: new Weapon(10000, 1000)
}
];

interface WeaponOptions {
    instance: Weapon;
    name: string
}

function initWeapons(defaultWeapons: WeaponOptions[]) {
    defaultWeapons.forEach(weapon => {
        weaponsList.set(weapon.name, weapon.instance)
    })
}

initWeapons(defaultWeapons);

const weapons = Array.from(weaponsList.values())

let current_money: number = 0;
let current_money_new: string;
let DPS: number = 0;
let DPS_new: string;

function numberWithCommas(x: number): string { //разделитель тысяч точками
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function Click() { //клик по центральному кругу
    current_money++;
    SetMoney();
}

function SetMoney() { //записываем количество денег
    current_money_new = numberWithCommas(current_money);
    money.textContent = `${current_money_new} $`;
}

function SetDPS() { //автоматический прирост денег
    current_money = current_money + DPS;
    DPS_new = numberWithCommas(DPS);
    dps.textContent = `${DPS_new} $/s`;
    SetMoney();
}

function SetAmountWeapon() { //записываем количество оружия
    weapons.forEach((e, index) => weaponAmount[index].textContent = `${e.amount}`)
}

function NoMoney() { //мигаем красным если недостаточно денег
    money.classList.add("alert");
    setTimeout(() => money.classList.remove("alert"), 500);
}

function Restart() { //перезапуск
    let RestartConfirm = confirm("Are You Sure?");
    if (RestartConfirm) {
        weapons.forEach((e, index) => weapons[index].restart())
        current_money = 0;
        DPS = 0;
        SetMoney();
        SetDPS();
        SetAmountWeapon();
        localStorage.clear()
    }
}

// function Close() {
//     afkAlert.classList.remove("afk-alert-new");
// }

// function AFKAlert() {
//     if (parseInt(localStorage.getItem("money"), 10) !== 0) {
//         afkAlert.classList.add("afk-alert-new");
//     }
// }

// function SetAFKEarnings() {
//     document.querySelector(".afk-alert-text").textContent = `You were AFK for ${afkTime} seconds. Your AFK earnings ${afkEarnings}$`;
// }

function LoadingScreen() {
    loadingScreen.classList.add("loading-screen-new");
}

function buy(weapon: Weapon) {
    if (current_money >= weapon.cost) {
        current_money = current_money - weapon.cost;
        SetMoney();
        weapon.increaseAmount();
        SetAmountWeapon();
        DPS = DPS + weapon.dps;
    } else {
        NoMoney()
    }
}

for (let i = 0; i < 5; i++) {
    BuyWeapon[i].addEventListener("click", () => buy(weapons[i]));
}

point.addEventListener("click", Click);

restart.addEventListener("click", Restart);

// ok.addEventListener("click", Close);

setInterval(() => SetDPS(), 1000);

setTimeout(LoadingScreen, 2000);