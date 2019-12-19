
/* функция добавления ведущих нулей */
/* (если число меньше десяти, перед числом добавляем ноль) */
function zero_first_format(value)
{
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
}

/* функция получения текущей даты и времени */
function date_time()
{
    const current_datetime = new Date();
    const day = zero_first_format(current_datetime.getDate());
    const month = zero_first_format(current_datetime.getMonth()+1);
    const year = current_datetime.getFullYear();
    const hours = zero_first_format(current_datetime.getHours());
    const minutes = zero_first_format(current_datetime.getMinutes());
    const seconds = zero_first_format(current_datetime.getSeconds());

    return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
}
/* каждую секунду получаем текущую дату и время */
/* и вставляем значение в блок с id "current_date_time_block2" */
setInterval(function () {
    document.getElementById('current_date_time_block2').innerHTML = date_time();
}, 1000);




// глобальная переменная, хранящая количество секунд, прошедших с момента нажатия ссылки
let count=0;
// глобальная переменная, хранящая идентификатор таймера
let timer;
//функция, выполняет следующее:
//1 - выводит значения переменной count в элемент с id="clock"
//2 - увеличивает значения переменной на 1
//3 - запускает таймер, который вызовет функцию timeCount() через 1 секунду
function timeCount() {
    document.getElementById("countTime").innerHTML = count.toString();
    count++;
    timer = window.setTimeout(function(){ timeCount() },1000);
}
//функция проверяет выражение !timer по правилу лжи, если оно истинно,
//то вызывает функцию timeCount()
function startCount() {
    if (!timer)
        timeCount();
        document.querySelector('')

}
//функция проверяет выражение timer по правилу лжи
//Если оно истинно, то она вызывает метод clearTimeOut() для прекращения работы таймера
//и присваивает переменной timer значение null
function stopCount() {
    if (timer) {
        clearTimeout(timer);
        timer=null;
    }
}

