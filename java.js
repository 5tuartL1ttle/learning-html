/*let - можно присваивать значени повторно. RESULT - 7*/
    //let a = 5
    //a = 7
    //console.log(a)
/*const - запрещено присваивать значени повторно. RESULT - MISTAKE*/
    //const b = 5
    //b = 3
    //console.log(b)

    //переменная
    
//ссылочный тип только один - object!

/*
const objectA = {
    a: 10,
    b: true
}
    //{ a: 10, b: true}
    
const copyOfA = objectA     //копия переменной
copyOfA.a = 20              //изменение данных переменной
    //objectA.a -> 20
    //{ a: 20, b: true}
copyOfA.c = 'abc'           //добавление другой переменной в объект
    //objectA.c -> 'abc'
    //{ a: 20, b: true, c: 'abc' }
console.log(objectA)
*/

//функция имя (параметр) {тело}

//типизации
/*function a() {
    console.log('Hey there')
}

a() // 'Hey there'

a = 10  //уже не функция, а содержит число

a()*/

//стрелочная функция =>
/*const a = () => {
    console.log('Hey there')
}

a() // 'Hey there'

a = 10  //нельзя изменять константу!

a()*/

//__________ПРАВИЛА РАБОТЫ С ПЕРЕМЕННЫМИ___________
// 1. ВСЕ ПЕРЕМЕННЫЕ ОБЪЯВЛЯТЬ ПЕРЕД ИХ ИСПОЛЬЗОВАНИЕМ
// 2. СТАРАТЬСЯ ИСПОЛЬЗОВАТЬ const ВЕЗДЕ, ГДЕ ЭТО ВОЗМОЖНО

    /*myCity - object*/
/*const myCity = {
    //свойство: значение свойства
    city: 'New York',
    popylar: true,
    country: 'USA'
}

myCity.city = 'Las Vegas'   //изменение значения
myCity.people = 700003      //добавление выражения

console.log(myCity)

delete myCity.country       //удаление выражения

console.log(myCity)
*/

    //finance
/*let VTB = 262, SBER = 723, TINK = 1145, TINKVKLAD = 964

const result = {
    rAll: VTB + SBER + TINK,
    rVk: TINKVKLAD
}

console.log(result)*/

/*const myCity = {
    city: 'New York'
}
myCity['popular'] = true

console.log(myCity)

const countryPropertyName = 'country'   //создание свойства с именем 'country'
myCity[countryPropertyName] = 'USA'     //присвоение свойству значение 'USA'

console.log(myCity)*/

/*const myCity = {
    city: 'New York',
    info: {     //вложенный объект
        isPopular: true,
        country: 'USA'
    }
}
console.log(myCity.info.isPopular)  //true

delete myCity.info['isPopular']     //можно использовать не только [], но и две точки (myCity.info.isPopular)
*/

/*const name = 'Danil'
const postsQty = 21

const userProfile = {
    //сокращённые свойства рек. размещать в начале объекта, а так же сортировать по их длинне.
    name,       //сокращённая запись. вместе name: name
    postsQty,   //сокращённая запись. вместо postsQty: postsQty
    hasSignedAgreement: false
}
console.log(userProfile)*/

//  1 вариант
    /*const myCity = {
        city: 'New York',
        //метод объекта myCity
        cityGreeting: function () {
            console.log('Greetings!!')
        }
    }
    
    myCity.cityGreeting()*/
//  2 вариант. с сокращениями
    /*const myCity = {
        city: 'New York',
        //метод объекта myCity. убрали : function ()
        cityGreeting() {
            console.log('Greetings!!')
        }
    }
    
    myCity.cityGreeting()*/

//  myCity.city - доступ к значению свойства
//  myCity.cityGreeting() - вызов метода ()

//__JSON
//_____мутирование объектов
/*при изменении значений в персон2 изменяются так же объекты из персон
т.к. персон2 лишь ссылается на персон*/
/*const person = {
    name: 'Bob',
    age: 25
}

const person2 = person

person2.age = 26
person2.isAdult = true

console.log(person.age)         //26
console.log(person.isAdult)     //true
*/

//как избежать мутации
//вариант 1
/*const person = {
    name: 'Bob',
    age: 25
}
//assign (пустой объект, что записать в пустой объект)
//если у объекта есть вложенные объекты, то ссылки на них сохраняются!
const person2 = Object.assign({}, person)

person2.age = 26

console.log(person.age)     //25
console.log(person2.age)     //26
*/
//вариант 2
/*const person = {
    name: 'Bob',
    age: 25
}
//  ... - оператор разделения объектов на свойства
// {} - создаётся новый объект
//если у объекта есть вложенные объекты, то ссылки на них сохраняются
const person2 = { ...person }

person2.name = 'Alice'

console.log(person.name)     //Bob
console.log(person2.name)     //Alice
*/
//вариант 3
/*const person = {
    name: 'Bob',
    age: 25,
    location: {
        city: 'New York',
        country: 'USA'
    }
}
//1. конвертация объекта person в строку (stringify)
//2. передаём как аргумент и конвертируем объект обратно в JS (parse)
//если у объекта есть вложенные объекты, то ссылки на них НЕ сохраняются
const person2 = JSON.parse(JSON.stringify(person))

person2.name = 'Alice'
person2.location.city = 'Moscow'
person2.location.country = 'Russia'

console.log('1 - ', person)     //Bob
console.log('2 - ', person2)     //Alice
*/


//Л: функции - блок кода, который можно выполнять многократно
/*1
//создаём функцию и передаём ей параметры a, b с разными значениями
function sum(a, b) {
    const c = a + b
    console.log(c)
}

sum(1, 4)   //вызвали функцию sum(a, b)
sum(5, 2)   //вызвали функцию sum(a, b)
*/
//Л: функция может быть - именованной/ присвоена переменной/
// анонимной/ аргумментом при вызове другой функции/
// значением свойства (метода) объекта
// функция - объект
/*2
//myFn - Имя. {тело}. (a, b) - параметры
function myFn(a, b) {
    let c
    a += 1
    c = a + b
    return c    //результат
}
console.log(
    myFn(1, 5),  //7
)      
*/
/*3
const personOne = {
    name: 'Bob',
    age: 21
}
//(person) - при вызове функции создаётся объект с такой же ссылкой, что и personOne
//функция мутирует внешний объект (НЕ РЕКОМЕНДУЕТСЯ)
function increasePersoneAge(person) {
    person.age += 1
    return person
}
//personOne - person - age
increasePersoneAge(personOne)   //вызов функции
console.log(personOne.age)      //22
*/
//создание копии объекта
/*const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersoneAge(person) {
    const updatePerson = Object.assign({}, person)  //создание нового объекта
    updatePerson.age += 1                           //работа с новым объектом
    return updatePerson
}

const updatePersonOne = increasePersoneAge(personOne)
console.log(personOne.age)              //21
console.log(updatePersonOne.age)        //22
*/

//_______колбэк функция_____//
//функция вызывается внутри другой функции
//anotherFunction - колюэк
/*function anotherFunction() {
    // действия
}
// та функция, что передастся в callbacnFunction, будет выполнена
function fnWithCallback(callbacnFunction) {
    callbacnFunction()
}

fnWithCallback(anotherFunction)
*/

/*function printMyName() {
    console.log('Danil')
}
//встроенная функция
setTimeout(printMyName, 1000)   //колбэк функция будет вызвана через 1000мс (1с)
*/

//ПРАВИЛА РАБОТЫ С ФУНКЦИЯМИ
//1. называть функции из выполняемых задач
//2. одна функция должна выполнять одну задачу
//3. не рекомендуется изменять внешние относительно функции переменные

//ТЕМА: ОБЛАСТИ ВИДИМОСТИ.
//ОПРЕДЕЛЯЕТ ГРАНИЦЫ ДЕЙСТВИЯ ПЕРЕМЕННОЙ

/*глобавльная область видимости*/
/*let a, b    //глобальаные переменные

function myFn() {
    //{область видимости функции}
    let b   //локальная переменная
    a = true    //нарушение правила
    b = 10
    console.log(b)  //10
}

myFn()

console.log(a)  //true
console.log(b) //undefined
*/

/*const a = 5

function myFn() {
    function innerFn() {
        console.log(a)  //5
    }
    innerFn()
}

myFn()
//innerFn() - ошибка. только внутри myFn()
*/
/*ЗАПРЕТ ИСПОЛЬЗОАВНИЕ НЕОБЪЯВЛЕННЫХ ПЕРЕМ. ПИСАТЬ ВНАЧАЛЕ.
'use strict'    //инструкция для js. запрещает использоване необъяыленных переменных

function myFn() {
    a = true
    console.log(a)  //ошибка!
}

myFn()

console.log(a)
*/

//ТЕМЫ:ОПЕРАТОРЫ
/*оператор три точки (...)
const button = {
    width: 200,
    text: 'Buy'
}
//изменение объекта button
const redButton = {
    ...button,      //разделяем на свойства
    color: 'Red'    //добавляем
}

console.table(button)
console.table(redButton)
*/

/*ОБЪЕДИНЕНИЕ ОБЪЕКТОВ
const buttonInfo = {
    text: 'Buy'
}

const buttonStyle = {
    color: 'yellow',
    width: 200,
    height: 300
}
//ОБЪЕДИНЕНИЕ ОБЪЕКТОВ
const button = {
    ...buttonInfo,
    ...buttonStyle
}
console.table(button)
*/

/*const myName = 'Danil'
const myCity = 'Yaroslavl'

const greeting = `Меня зовут ${myName}, я живу в городе ${myCity}`

console.log(greeting)*/

//присваивание функционального выражения переменной
//переменная = функция(){}
/*const myFunction = function(a, b) {
    let c
    a += 1
    c = a + b
    return c
}

myFunction(5, 3)    //9*/

//стрелочная функция - выражение. всегда анонимны
/*(a, b) => {
    let c
    a += 1
    c = a + b
    return c
}*/

//сокращения в стрелочных функциях
//можно опустить скобки(), если один параметр
/*a => {
    //body
}
//фигурные скобки можно опустить, если тело состоит из одного выражения
(a, b ) => a + b*/

//значение параметров функции по умолчанию

//ЗАДАЧА. ПЕРЕДЕЛАТЬ В АНОНИМНУЮ И СТРЕЛОЧНУЮ
/*function multByFactor(value, multipier = 1) {
    return value * multipier
}

multByFactor(10, 2) //20
multByFactor(5)     //5
//ЗАДАЧА РЕШЕНА
const multByFactor = (value, multipier = 1) => value * multipier

const a = multByFactor(10, 2) //20
const b =multByFactor(5)     //5*/

//неявный возврат объекта
//переменная = (параметр, дефолт значение для параметра addedAt = Date()) => ({возврат объекта неявно засчёт () })
/*const newPost = (post, addedAt = Date()) => ({
    ...post,    //разделяем
    addedAt,    //добавляем. свойство имеет значение дату вызова newPost
})

const firstPost = {
    id: 1,
    author: 'Danil',
}

const finish = newPost(firstPost)
console.table(finish)*/

//явный возврат объекта                         возвращаем
/*const newPost = (post, addedAt = Date()) => { return {
        ...post,   //разделяем
        addedAt   //добавляем. свойство имеет значение дату вызова newPost
    }
}

const firstPost = {
    id: 1,
    author: 'Danil',
}

const finish = newPost(firstPost)
console.table(finish)*/

//___ОБРАБОТКА ОШИБОК
/*const fnWithError = () => {
    throw new Error('Some error')
}
//Uncaught error - непойманная ошибка
fnWithError()
//(!)сообщение не покажет
console.log('Continue... ')*/

//___TRY/CATCH
/*try {
    //выполнение блока кода
} catch (error) {
    //этот блок выполняется в случае возникновения ошибок в блоке try
}*/

//пример
/*const fnWithError = () =>{
    throw new Error('Some error')   //ошибка
}

try{
    fnWithError()   //выполняем функцию содержащую ошибку
} catch (error) {   //cath - ловить. в случае поимки ошибки выполняем код
    console.error(error)    //выводим всю ошибку
    console.log(error.message)      //выводим сообщение ошибки
}
//(!)сообщение покажет, т.к. ошибку поймали
console.log('Continue...')*/

//___ИНСТРУКЦИИ
/*  (Л)
 *  ВЫРАЖЕНИЕ ВОЗВРАЩАЕТ ЗНАЧЕНИЕ. 
 *  ИНСТРУКЦИЯ ВЫПОЛНЯЕТ ДЕЙСТВИЯ. ЗАВЕРШАЕТСЯ тчк-зпт (можно опускать). ИСКЛ.: {}
*/
/*let a;  //инструкция. 
//интсрукции следует разделять пустой строкой
const b = 5;    //инструкция. завершается ;
//инструкция. if НЕ возвращает значение
if (a > b) {
    console.log('a is larger');
}
//инструкция
for (let i = 0; i++; i < 5) {
    console.log(i);
}*/
//  ВЫРАЖЕНИЕ - ИНСТРУКЦИЯ
/*'abc';  //  'выражение'. из-за тчк-зпт - инструкция.

a = a + 3;

c = a + b;

d = 'Good ' + 'Evening';

myFunction(c, d);

console.log('Hey');*/

//___МАССИВЫ
// - это объект с цифровыми именами свойств
//формат записи
/*const myArray = [1, 2, 3]
console.log(myArray)    //[1, 2, 3]

const myArray2 = new Array(1, 2, 3)
console.log(myArray2)    //[1, 2, 3]

console.log(myArray === myArray2)    //false. т.к. хранятся в разных местах памяти*/
//ЧТЕНИЕ ЗНАЧЕНИЙ МАССИВА
/*const myArray = [1, true, 'a']  //  index: [0, 1, 2]
console.log(myArray)    //  [1, true, 'a']

console.log(myArray[0]) //  1. [0] - индекс
console.log(myArray[1]) //  true

console.log(myArray.length) //  3
//ИЗМЕНЯЕМ МАССИВ
myArray[2] = 'abc'
console.log(myArray)    //  [1, true, 'abc']

myArray[3] = 5
console.log(myArray)    //  [1, true, 'abc', 5]
console.log(myArray.length) //  4
*/
//МЕТОДЫ МАССИВОВ
/*const myArray = [1, 2, 3]
console.log(myArray)    //  [1, 2, 3]
//  push - добавление элемента в конец массива
myArray.push(4)

console.log(myArray)    //  [1, 2, 3, 4]

myArray.push(true) //добавление элемента в конец массива

console.log(myArray)    //  [1, 2, 3, 4, true]

//  pop() - удаление последнего элемента в массиве
myArray.pop()

console.log(myArray)    //  [1, 2, 3, 4]

let removedElement = myArray.pop()    //записывает удалённый элемент. (4)

console.log(myArray)    //  [1, 2, 3]
console.log(removedElement) //  4

//  unshift - добавление элемента в начало массива
myArray.unshift(false)

console.log(myArray)    //  [false, 1, 2, 3]

//shift - удаляетпервый элемент в начале массива
myArray.shift()

console.log(myArray)    //  [1, 2, 3]]

removedElement = myArray.shift()

console.log(myArray)    //[2, 3]
console.log(removedElement)*/

//___forEach
/*const myArray = [1, 2, 3]
console.log(myArray)    //[1, 2, 3]

//цикл пребирает ВСЕ элементы массива
myArray.forEach(el => console.log(el * 2))  //callback fun. аргумент - функциия
//результат forEach: 2. 4. 6. перебрав каждый элемент мы его умножили на 2

console.log(myArray)    //[1, 2, 3]
//оригинальный массив не изменился
*/

//___map - возвращает новый массив
/*const myArray = [1, 2, 3]
console.log(myArray)    //[1, 2, 3]
//анонимная функция
const newArray = myArray.map(
    function (el){
        return el * 3
    }
)
//или стрелочная
const newArray2 = myArray.map(el => el * 3)

console.log(newArray)   //[3, 6, 9]
console.log(newArray2)   //[3, 6, 9]
console.log(myArray)    //[1, 2, 3]
//оригинальный массив не изменился
*/

//___ДЕСТРУКТУРИЗАЦИЯ
/*const userProfile = {
    name: 'Danil',
    //commentsQty: 21,
    hasSignedAgreement: false,
}

console.log(userProfile.name)   //Danil

//объявление переменных и присваивание значени на основе значений свойств объекта
const { commentsQty, name } = userProfile
const { hasSignedAgreement } = userProfile

console.log(name)           //Danil
console.log(commentsQty)    //21

//---МАССИВОВ
const fruits = ['apple', ' banana']
//порядок следования ВАЖЕН. index[0, 1]
const [fruitOne, fruitTwo] = fruits

console.log()   //пустышка
//---В ФУНКЦИЯХ
const userInfo = ({ name, commentsQty }) => {
    //если commentsQty нету, то
    if (!commentsQty) {
        return `User ${name} has no comments`
    }
    //иначе
    return `User ${name} has ${commentsQty} comments`
}

console.log(userInfo(userProfile))  //User Danil has 21 comments
*/

//___УСЛОВНЫЕ ИНСТРУКЦИИ
//  if / if...else / switch / тернарный оператор (выражение)

/*  --if
if(Условие) {
    //Блок кода
}*/
/* примеры
//пример 1
let val = 10

if (val > 5) {
    val += 20
}

console.log(val)    //30

//пример 2
const person = {
    age : 20
}

//если в объекте person нет свойства .name, то
if (!person.name) {
    console.log('Имя не указано')
}*/

/*  --if else
if (Условие) {
    //code. if (bool) is true
} else {
    //code. if (bool) is false
}*/
/*пример
let val = 10

if (val < 5) {
    val += 20
} else {
    val -= 20
}

console.log(val)    //-10*/

/*  --if else if
if (Условие 1) {
    //code. if Условие 1 is true
} else if (Условие 2) {
    //code. if Условие 2 is true
} else {
    //code. if Условие 1 and Условие 2 is false
}*/
/*примеры
//пример if else if
const age = 25

if (age > 18) {
    console.log('Is adult')
} else if (age >= 12) {
    console.log('Is teenager')
} else {
    console.log('Is child')
}

//переделанный пример выше на if-ы
if (age > 18) {
    console.log('Is adult')
}
if (age >= 12 && age <= 18) {
    console.log('Is teenager')
}
if (age < 12) {
    console.log('Is child')
}*/

//if в функциях
/*пример
const sumPositivNumbers = (a, b) => {
    //если тип а НЕ число ИЛИ тип b НЕ число
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the arguments is not a number'
        //иначе если а МЕНЬШЕ ИЛИ РАВНО 0 ИЛИ b МЕНЬШЕ ИЛИ РАВНО 0
    } else if (a <= 0 || b <= 0) {
        return 'Number are not positive'
    }

    return a + b
}

console.log(sumPositivNumbers(1, 6))    //7
console.log(sumPositivNumbers('a', 6))  //'One of the arguments is not a number'
console.log(sumPositivNumbers(1, -6))   //'Number are not positive'*/

/*  --switch
switch (Выражение) {
    case A:
        //Действия если Выражение === А
        break
    case B:
        //Действия если Выражение === А
        break
    default:
        //Действие по умолчанию
}*/
/*пример
const month = 2

switch (month) {
    case 12:
        console.log('Декабрь')
        break;
    case 1:
        console.log('Январь')
        break;
    case 2:
        console.log('Февраль')
        break;
    default:
        console.log('Это не зимний месяц')
}*/

/*  --тернарный оператор
 * у него ТРИ операнда
 * конструкция с тернарным оператором - выражение
 * выражение возвращает значение
 * 
 * Условие ? Выражение 1 : Выражение 2
 * Любое выражение ?
 * Если условие правдиво, тогда возвращается результат Выражения 1 :
 * Если условие правдиво, тогда возвращается результат Выражения 2
 * 
 * Условие
 *  ? Выражение 1
 *  : Выражение 2
*/
/* примеры
//пример 1
const value = 11

value //true?
    ? console.log(true)
    : console.log(false)

// пример 2
const value1 = 11
const value2 = 25

//value1 && value2 true? оба числа позитивные?
value1 && value2
    ? myFunction1(value1, value2)
    : myFunction2()

//прмиер 3
let value = 11
console.log(value >= 0 ? value : -value)    //11 > 0. 11

value = -5
const res = value >= 5 ? value : -value
console.log(res)    //5 !> 5. 5*/

//___ЦИКЛЫ
//  for / for ... in ... / while / do ... while / for ... of ...

/* for
//(три исходные инструкции)
for (Начальная инструкция; Условие; Итерационное действие) {
    //Блок кода выполняемый на каждоый итерации
}*/
/*пример
for (let i = 0; i < 5; i++) {
    console.log(i)
}*/
//РЕКОМЕНДУЕТСЯ ДЛЯ МАССИВОВ ИСПОЛЬЗОВАТЬ НЕ FOR А ФУНКЦИИ ВЫСШЕГО ПОРЯДКА - forEach, map, reduce
/*для массивов
//for
const myArray = ['first', 'second', 'thrid']

for (let i = 0; i < myArray.length; i++){
    console.log(myArray[i])
}
//forEach
const myArray = ['first', 'second', 'thrid']

myArray.forEach((element, index) => {
    console.log(element, index)
    //'first' 0 etc.
})
*/

/*while
//выполняется пока условие правдиво
while (условие) {
    //code
}*/
/*пример
let i = 0

while (i < 5) {
    console.log(i)     
    i++
}*/

/*do while
//делай что-то, пока условие правдиво
do {
    //code
} while (условие)*/
/*примеры
//пример 1
let i = 0

do {
    console.log(i)  //0, 1, 2, 3, 4
    i++
} while (i < 5)
//пример 2
i = 10

do {
    console.log(i)  //1
    i++
} while (i < 5)*/

/*for in
//key - название каждого свойства
for (key in Object) {
    Действия с каждым свойством объекта
    //значения свойства - Object(key)
}*/

//пример
/*const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}*/

/*for (const key in myObject) {
    console.log(key, myObject[key])
    /*
    * x 10
    * y true
    * z abc
    */
//}

//forEach
//Object.keys(myObject) - получение всех ключей объекта в виде массива
/*Object.keys(myObject).forEach(key => {
    console.log(key, myObject[key])
    
    // x 10
    // y true
    // z abc
    
})

//только значения
/*Object.values(myObject).forEach(value => {
    console.log(value)
    //
    // 10
    // true
    // abc
    //
})*/

//for in для массива (not recommended)
/*const myArray = [true, 10, 'abc', null]

for (const key in myArray) {
    console.log(myArray[key])
    // true
    // 10
    // abc
    // null
}*/

//for of (появился в ES6)
/*for (Element of Interable) {
    //действия с определённым элементов
}*/

//пример
/*const myString = 'Hey'

for (const letter of myString) {
    console.log(letter)
    // H
    // e
    // y
}

const myArray = [true, 10, 'abc', null]

myArray.forEach(element => {
    console.log(element)
    // true
    // 10
    // 'abc'
    // null
})*/

//for of НЕ для объектов
/*let myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

//TypeError: myObject is not iterable
for (const prop of myObject) {
    console.log(prop)
}*/

//___МОДУЛИ
//EXPORT/IMPORT ПОЯВИЛСЯ В ES6
/*
 * moduleOne.js     |   moduleTwo.js
 *                  |   
 * export ...       |   import ...
*/

/* правила работы с модулями
 * 
 * 1. Модули должны быть одноцелевыми
 * 2. располагайте все export инструкции внизу файла
 * 3. располагайте все import инструкции сверху файла
 * 4. По возможности используйте export default
*/

//___КЛАССЫ И ПРОТОТИПЫ
//class ...
//Позволяют создавать прототипы для объектов
//на основании прототипов создаются экземпляры
//экземпляры могут иметь собств. свойства и методы.
class Comment {
    //метод
    constructor(text) {
        //this - указывает на экземпляр класса
        this.text = text
        this.votesQty = 0
    }
    //метод. увеличить кол-во.
    upvote() {
        this.votesQty += 1
    }
}

//создание экземпляра
const firstComment = new Comment('First')

console.log(firstComment)

//проверка принадлежности
const fCi = firstComment instanceof Comment //true
firstComment instanceof Object  //true

const f = 'г советская гавань хабаровский край ул ленина'
console.log(f.toUpperCase())