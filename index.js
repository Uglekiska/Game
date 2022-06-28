const point = document.querySelector(".target");
const money = document.querySelector(".money");
const dps = document.querySelector(".dps");
const restart = document.querySelector(".restart-button");

const ok = document.querySelector(".confirm-button");
const afkAlert = document.querySelector(".afk-alert");

const BuyWeapon1 = document.querySelector(".weapon-buy-1");
const AmountWeapon1 = document.querySelector(".amount-1");
const BuyWeapon2 = document.querySelector(".weapon-buy-2");
const AmountWeapon2 = document.querySelector(".amount-2");
const BuyWeapon3 = document.querySelector(".weapon-buy-3");
const AmountWeapon3 = document.querySelector(".amount-3");
const BuyWeapon4 = document.querySelector(".weapon-buy-4");
const AmountWeapon4 = document.querySelector(".amount-4");
const BuyWeapon5 = document.querySelector(".weapon-buy-5");
const AmountWeapon5 = document.querySelector(".amount-5");

const Knife = new Weapon(10, 1);
const Bow = new Weapon(100, 10);
const Hammer = new Weapon(500, 50);
const Sword = new Weapon(1000, 100);
const Pistol = new Weapon(10000, 1000);

let current_money = 0;
let current_money_new;
let DPS = 0;
let DPS_new;

window.onload = Continue; //загрузка сохранения при открытии
window.onbeforeunload = Save; //сохнанение при закрытии

function numberWithCommas(x) { //разделитель тысяч запятыми
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function Click() { //клик по центральному кругу
    current_money++;
    SetMoney();
}

function SetMoney() { //записываем количество денег
    current_money_new = numberWithCommas(current_money);
    money.innerHTML = `${current_money_new} $`;
}

function SetDPS() { //автоматический прирост денег
    current_money = current_money + DPS;
    DPS_new = numberWithCommas(DPS);
    dps.innerHTML = `${DPS_new} $/s`;
    SetMoney();
}

function SetAmountWeapon() { //записываем количество оружия
    AmountWeapon1.innerHTML = `${Knife.amount}`
    AmountWeapon2.innerHTML = `${Bow.amount}`
    AmountWeapon3.innerHTML = `${Hammer.amount}`
    AmountWeapon4.innerHTML = `${Sword.amount}`
    AmountWeapon5.innerHTML = `${Pistol.amount}`
}

function NoMoney() { //мигаем красным если недостаточно денег
    money.classList.add("alert");
    setTimeout(() => money.classList.remove("alert"), 500);
}

function Restart() { //перезапуск
    let RestartConfirm = confirm("Are You Sure?");
    if (RestartConfirm === true) {
        Knife.restart();
        Bow.restart();
        Hammer.restart();
        Sword.restart();
        Pistol.restart();
        current_money = 0;
        SetMoney();
        DPS = 0;
        SetDPS();
        localStorage.clear()
    }
}

function Close() {
    afkAlert.style.display = "none";
}

function AFKAlert() {
    if (parseInt(localStorage.getItem("money"), 10) !== 0) {
        afkAlert.style.display = "block";
    }
}

function SetAFKEarnings() {
    document.querySelector(".afk-alert-text").innerHTML = `You were AFK for ${afkTime} seconds. Your AFK earnings ${afkEarnings}$`;
}

BuyWeapon1.addEventListener("click", () => Knife.buy());
BuyWeapon2.addEventListener("click", () => Bow.buy());
BuyWeapon3.addEventListener("click", () => Hammer.buy());
BuyWeapon4.addEventListener("click", () => Sword.buy());
BuyWeapon5.addEventListener("click", () => Pistol.buy());

point.addEventListener("click", Click);

restart.addEventListener("click", Restart);

ok.addEventListener("click", Close);

setInterval(() => SetDPS(), 1000);