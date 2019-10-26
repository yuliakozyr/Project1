let money=+prompt("Ваш бюджет на месяц?");
let time=prompt("Введите дату в формате YYYY-MM-DD", "0000-00-00");
let otvet1_1=prompt("Введите обязательную статью расходов в этом месяце");
let otvet1_2=+prompt("Во сколько обойдется?");
let otvet2_1=prompt("Введите обязательную статью расходов в этом месяце");
let otvet2_2=+prompt("Во сколько обойдется?");
let moneyDen=money/30;
let appData={Budget: money, timeData: time, expences: {otvet1_1 : otvet1_2, otvet2_1 : otvet2_2}, optionalExpences: {}, income: [], savings: false};
alert("Ваш бюджет на один день составляет " + money/30);
