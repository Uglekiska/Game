const point = document.querySelector(".target");
const money = document.querySelector(".money");
const dps = document.querySelector(".dps");

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

let DPS = 0;
let current_money = 0;
let current_money_new;
let DPS_new;

AmountWeapon1Counter = 0;
AmountWeapon2Counter = 0;
AmountWeapon3Counter = 0;
AmountWeapon4Counter = 0;
AmountWeapon5Counter = 0;

function numberWithCommas(x) { //разделитель тысяч запятыми
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Click() {
    current_money++;
    SetMoney();
}

function SetMoney() {
    current_money_new = numberWithCommas(current_money);
    money.innerHTML = `${current_money_new} $`;
}

function SetDPS() {
    current_money = current_money + DPS;
    DPS_new = numberWithCommas(DPS);
    dps.innerHTML = `${DPS_new} $/s`;
    SetMoney();
}

function SetAmountWeapon1() {
    AmountWeapon1.innerHTML = `${AmountWeapon1Counter}`
}

function SetAmountWeapon2() {
    AmountWeapon2.innerHTML = `${AmountWeapon2Counter}`
}

function SetAmountWeapon3() {
    AmountWeapon3.innerHTML = `${AmountWeapon3Counter}`
}

function SetAmountWeapon4() {
    AmountWeapon4.innerHTML = `${AmountWeapon4Counter}`
}

function SetAmountWeapon5() {
    AmountWeapon5.innerHTML = `${AmountWeapon5Counter}`
}

function BuyW1() {
    if (current_money >= 10) {
        current_money = current_money - 10;
        SetMoney();
        AmountWeapon1Counter++;
        SetAmountWeapon1();
        DPS = DPS + 1;
    } else {
        NoMoney()
    }
}

function BuyW2() {
    if (current_money >= 100) {
        current_money = current_money - 100;
        SetMoney();
        AmountWeapon2Counter++;
        SetAmountWeapon2();
        DPS = DPS + 10;
    } else {
        NoMoney()
    }
}

function BuyW3() {
    if (current_money >= 500) {
        current_money = current_money - 500;
        SetMoney();
        AmountWeapon3Counter++;
        SetAmountWeapon3();
        DPS = DPS + 50;
    } else {
        NoMoney()
    }
}

function BuyW4() {
    if (current_money >= 1000) {
        current_money = current_money - 1000;
        SetMoney();
        AmountWeapon4Counter++;
        SetAmountWeapon4();
        DPS = DPS + 100;
    } else {
        NoMoney()
    }
}

function BuyW5() {
    if (current_money >= 10000) {
        current_money = current_money - 10000;
        SetMoney();
        AmountWeapon5Counter++;
        SetAmountWeapon5();
        DPS = DPS + 1000;
    } else {
        NoMoney()
    }
}

function NoMoney() {
    money.classList.add("alert");
    setTimeout(() => money.classList.remove("alert"), 500);
}

BuyWeapon1.addEventListener("click", BuyW1);
BuyWeapon2.addEventListener("click", BuyW2);
BuyWeapon3.addEventListener("click", BuyW3);
BuyWeapon4.addEventListener("click", BuyW4);
BuyWeapon5.addEventListener("click", BuyW5);

point.addEventListener("click", Click);

setInterval(() => SetDPS(), 1000);