"use strict";

//объявляю и инициализирую константы и переменные
const a = document.querySelector("#value_a"),
    b = document.querySelector("#value_b"),
    c = document.querySelector("#value_c"),
    butEstimat = document.querySelector("#butEstimat"),
    butRecalc = document.querySelector("#butRecalc"),
    messageA = document.querySelector("#messageA"),
    messageB = document.querySelector("#messageB"),
    messageC = document.querySelector("#messageC");

let discrimin = document.querySelector("#discrimin"),
    x = document.querySelector("#resultX"),
    x1, x2,
    answer = document.querySelector("#answer");


//добавляю событие на клик мышки
butEstimat.addEventListener('click', estimat);
butRecalc.addEventListener('click', recalculate);
document.addEventListener('keydown', keyEnter);


//объявляю и вызываю функции по клику мыши
function estimat() {
    calcDiscrimin();
    calcRoot();
}

function recalculate() {
    location.reload();
}

//расчет по кнопке "Enter"
function keyEnter(event) {
    if (event.keyCode == 13) {
        estimat();
    }
}


//объявляю и вызываю функции расчета (+защита от "дурака")
function calcDiscrimin() {
    if (a.value == null || a.value == '' || isNaN(a.value) == true) {
        messageA.textContent = 'Введите корректное значение "а"!';
    } else {
        messageA.textContent = '';
    }
    if (b.value == null || b.value == '' || isNaN(b.value) == true) {
        messageB.textContent = 'Введите корректное значение "b"!';
    } else {
        messageB.textContent = '';
    }
    if (c.value == null || c.value == '' || isNaN(c.value) == true) {
        messageC.textContent = 'Введите корректное значение "c"!';
    } else {
        messageC.textContent = '';
    }
    if (!(a.value == null || a.value == '' || isNaN(a.value) == true) && !(b.value == null || b.value == '' || isNaN(b.value) == true) && !(c.value == null || c.value == '' || isNaN(c.value) == true)) {
        discrimin.value = Math.pow(b.value, 2) - 4 * a.value * c.value;
        discrimin.textContent = `Значение Дискриминанта D = ${+discrimin.value.toFixed(3)}`;
    } else {
        discrimin.textContent = `Ошибка расчета Дискриминанта`;
    }
}

function calcRoot() {
    if (discrimin.value > 0) {
        x1 = (-b.value + Math.sqrt(discrimin.value)) / (2 * a.value);
        x2 = (-b.value - Math.sqrt(discrimin.value)) / (2 * a.value);
        x.textContent = `Значение Корней уровнения x1 = ${+x1.toFixed(2)} и x2 = ${+x2.toFixed(2)}`;
        answer.textContent = `Если дискриминант больше нуля: значит существуют вещественные корни, график квадратичной функции пересекает ось "Х" в двух точках`;
    } 
    if (discrimin.value == 0) {
        x.value = -b.value / (2 * a.value);
        x.textContent = `Значение единственного Корня уровнения x = ${+x.value.toFixed(2)}`;
        answer.textContent = `Если Дискриминант равен нулю: значит существует один вещественный корень, график функции пересекает ось "Х" в одной точке`;
    } 
    if (discrimin.value < 0) {
        x1 = (-b.value + Math.sqrt(Math.abs(discrimin.value))) / (2 * a.value);
        x2 = (-b.value - Math.sqrt(Math.abs(discrimin.value))) / (2 * a.value);
        x.textContent = `Не существует вещественных Корней уровнения`;
        answer.textContent = `Если Дискриминант меньше нуля: значит не существует вещественных корней, а только комплексные корни x1компл = ${+x1.toFixed(2)} и x2компл = ${+x2.toFixed(2)}. График функции не пересекает ось "Х"`;
    }
    if (discrimin.innerHTML == `Ошибка расчета Дискриминанта`) {
        x.textContent = `Ошибка расчета Корней уровнения`;
        answer.textContent = `Введены некорректные коэффициенты`;
    }
}