const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let cost = data.budget / data.moneyPer1m3;
    let sShops = 0;
    let Sshop = 0;
    for(let i of data.shops) {
        Sshop = i.width * i.length;
        sShops += Sshop;
    }
    sShops *= data.height;
    if (cost >= sShops) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}

console.log(isBudgetEnough(shoppingMallData))