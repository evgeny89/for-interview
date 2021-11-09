//1. Что выведет alert(typeof NaN); ?
/*
 * Данный код выведет number, т.е. NaN, хоть это и звучит странно, имеет тип число.
 */

//2. Что выведет alert(NaN === NaN); ?
/*
 * Выведет false, т.к. NaN не равен ничему, даже другому NaN.
 */

//3. 0.1 + 0.2 == 0.3 ?
/*
 * Выведет false, т.к. результат операции слева от сравнения будет равен 0.30000000000000004,
 * это проблема не только языка js, но и большинства ЯП. Это связанно с представлением float чисел вычислительными машинами.
 * Они не понимают дробных чисел, и хранят информацию через степерь числа 2.
 * Но таким способом невозможно указать конкретно точно каждое рациональное дробное число.
 */

//4. Какой тип будет иметь переменная a, если она создается при помощи следующего кода:
var a = "a,b".split(',');
/*
 * console.log(typeof a) выведет "object", так устроен js.
 */

//5. Сделать так, чтобы при нажатии на элемент <а> алертом выводилось «Hello world!».
document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault()
    alert('«Hello world!»')
})

//6. Найти все элементы div с классом one, а также все элементы p с классом two. Затем добавить им всем класс three и визуально плавно спустить вниз.
const itemList = document.querySelectorAll("div.one, div.two");
itemList.forEach(item => item.classList.add("three"));
/*
 * Плавно опустить вниз можно с помощью css свойств transition + transform: translate().
 * Описать эти свойства в классе three и при его назначении получим желаемый результат.
 */

//7. Выбрать видимый div с именем red, который содержит тег span.
const item = document.querySelector("div[name='red'] > span");

/*
 * Таким образом мы выберем тег span, но как легко выбрать див имеющий тег спан и чтобы это была не эсперементальная технология - я не знаю...
 * В jQ это выглядит так: $("div[name='red']:has(span)"). Так же есть и уже внедряется поддержка браузерами псевдокласс :has() в css4.
 */

//8. Привести пример замыкания.
const func = () => {
    let a = 0;
    return function() {
        console.log(a++);
    }
}

const one = func();
const two = func();

one()
one()
one()
two()
one()
two()

/*
 * Замыкание это функция которая возвращает функцию и замыкает в себе окружение.
 * В примере выше переменная 'a' при вызове функции func не удалится из памяти после выполнения тела функции,
 * т.к. ее использует возвращаемая анонимная функция. Этот прием часто использовался раньше для инкапсуляции некоторых данных и логики,
 * потому что в нашем случае из вне невозможно достучаться до переменной 'a', а значит никто ее случайно не удалит и не перезапишет.
 */

//9. Написать функцию, которая уменьшает или увеличивает указанное время на заданное количество минут, например:
console.log(changeTime('10:00', 1)) //return '10:01'
console.log(changeTime('10:00', -1)) //return '09:59'
console.log(changeTime('23:59', 1)) //return '00:00'
console.log(changeTime('00:00', -1)) //return '23:59'

function changeTime(time, changeMinutes) {
    let [hours, minutes] = [...time.split(':')];
    const newTime = new Date().setHours(+hours, +minutes + changeMinutes);

    return new Date(newTime).toLocaleString().split(',')[1].replace(/.{3}$/, '');
}

//10. Написать функцию, возвращающую градус, на который указывают часовая и минутная стрелки в зависимости от времени, например:
console.log(clock_degree("00:00")) //returns : "360:360"
console.log(clock_degree("01:01")) //returns : "30:6"
console.log(clock_degree("00:01")) //returns : "360:6"
console.log(clock_degree("01:00")) //returns : "30:360"
console.log(clock_degree("01:30")) //returns : "30:180"
console.log(clock_degree("24:00")) //returns : "Check your time !"
console.log(clock_degree("13:60")) //returns : "Check your time !"
console.log(clock_degree("20:34")) //returns : "240:204"

function formating_degree(value) {
    if (value > 360) {
        value -=  360;
    }

    return value || 360;
}

function clock_degree(time) {
    let [hours, minutes] = [...time.split(':')];
    const Degree_In_One_Minutes = 6;
    const Degree_In_One_Hour = 30;
    const maxHourValue = 23;
    const maxMinutesValue = 59


    if (+hours > maxHourValue || +minutes > maxMinutesValue) {
        return "Check your time !";
    }

    const degHour = formating_degree(Degree_In_One_Hour * hours);
    const degMinutes = formating_degree(Degree_In_One_Minutes * minutes)

    return `${degHour}:${degMinutes}`;
}

//11. Написать простую игру «Угадай число». Программа загадывает случайное число от 0 до 100. Игрок должен вводить предположения и получать ответы «Больше», «Меньше» или «Число угадано».
const searchNumber = Math.floor(Math.random() * 101);

function game(text = '') {
    const result = +prompt(`(${text}) Введите предполагаемое число...`);

    if (result === 0) return;

    if (Number.isNaN(result)) {
        game("Вы ввели не число");
    }

    if (result < searchNumber) {
        game(`${result} меньше загаданного числа`);
    } else if (result > searchNumber) {
        game(`${result} больше загаданного числа`);
    } else {
        alert(`вы угадали, было загадано число ${searchNumber}`);
    }
}

game()
