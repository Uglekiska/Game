class Weapon {
    constructor(cost, dps, amount = 0) {
        this.cost = cost;
        this.dps = dps;
        this.amount = amount;
    }

    buy() {
        if (current_money >= this.cost) {
            current_money = current_money - this.cost;
            SetMoney();
            this.amount++;
            SetAmountWeapon();
            DPS = DPS + this.dps;
        } else {
            NoMoney()
        }
    }

    restart() {
        this.amount = 0;
        SetAmountWeapon();
    }
}

