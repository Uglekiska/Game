let date1;
let date2;
let afkTime;
let afkEarnings;

function Continue() {
    DPS = parseInt(localStorage.getItem("dps"), 10);

    Knife.amount = parseInt(localStorage.getItem("amountKnife"), 10);
    Bow.amount = parseInt(localStorage.getItem("amountBow"), 10);
    Hammer.amount = parseInt(localStorage.getItem("amountHammer"), 10);
    Sword.amount = parseInt(localStorage.getItem("amountSword"), 10);
    Pistol.amount = parseInt(localStorage.getItem("amountPistol"), 10);

    SetAmountWeapon();

    AFKAlert();

    date1 = parseInt(localStorage.getItem("date"), 10);
    date2 = Math.ceil(Date.now() / 1000);
    afkTime = date2 - date1;
    afkEarnings = DPS * afkTime;

    SetAFKEarnings();

    current_money = parseInt(localStorage.getItem("money"), 10) + afkEarnings;
}

function Save() {
    localStorage.setItem("money", current_money);

    localStorage.setItem("dps", DPS);

    localStorage.setItem("amountKnife", Knife.amount.toString());
    localStorage.setItem("amountBow", Bow.amount.toString());
    localStorage.setItem("amountHammer", Hammer.amount.toString());
    localStorage.setItem("amountSword", Sword.amount.toString());
    localStorage.setItem("amountPistol", Pistol.amount.toString());

    let Data = Math.ceil(Date.now() / 1000);

    localStorage.setItem("date", Data.toString());
}