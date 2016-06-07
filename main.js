//Фильтры в AngularJS  - это еще одна сущность которая позволяет манипулировать данными при выводе
// Для того чтобы поменять формат вывода денежных единиц или добавить знак $ не имеетс смысла использовать метод контроллера. Для этого существуют фильтры.
// Для примера давай создадим в шаблоне контроллер mainCtrl и выведем в нем переменную {{money}}
// теперь опише контроллер и присвоим переменной число 244
// посмотрим в браузер и увидим число 244
// Как же применить к этой переменной фильтр?
// Фильтры пишутся через палку ))) в шаблоне {{money | moneyFilter}}
// описывается фильтр в main.js спецсловом filter
// app.filter('moneyFilter', function(){
    // return function(str){
        // console.log('str', str);
        // return str;
    // };
// });
// На вход эта функция принимает строку и этой строкой является та переменная на которую мы применяем фильтр. Так же функция обязательно должна возвращать значение.
// Пока вернем то же значение, которое получили.
// как мы видим и в браузере и в консоле вывелось 244

// Теперь мы можем это строку преобразовать как угодно!Ё!!
// Самый простой вариант вообще ее заменить на другое значение

// app.filter('moneyFilter', function(){
    // return function(str){
        // console.log('str', str);
        // return 500;
    // };
// });

// Получаем в браузере 500 в консоле до замены так же 244

// Теперь попробуем сделать что-то более полезное
// Мы получаем от бекэнда значения в формате

// app.controller('mainCtrl', function ($scope) {
    // $scope.money1 = "1.22$";
    // $scope.money2 = "$2.33";
    // $scope.money3 = "4.33";
// });
// Как мы видим все значения в разном формате и а нам необходимо вывести их единообразно!!!
// Изменим шаблон вывода под эти переменные
// <div ng-controller='mainCtrl'>
    // {{money1 | moneyFilter}}
    // {{money2 | moneyFilter}}
    // {{money3 | moneyFilter}}
// </div>

// Теперь поработаем над фильтром!!!
// Сначала узнаем какой первый и последний символ у денег

// app.filter('moneyFilter', function () {
    // return function (str) {
        // var lastChar = str.slice(-1);
        // var firstChar = str.slice(0, 1);
    // }
// });

// Так же создадим переменную slicedPart (отрезанная часть).
// Теперь делаем проверку для первого варианта
        // if (lastChar === '$') {
            // slicedPart = str.slice(0, str.length - 1);
            // return $ + slicedPart;
        // }
// Если последний символ - это знак $, то в slicedPart присвоим строку от первого символа до предпоследнего. Возвращаем данные в формате $ + slicedPart.

//Вторая проверка на $доллар в начале строки
 // if (lastChar === '$') {
            // slicedPart = str.slice(0, str.length - 1);
            // return $ + slicedPart.
        // } else if (firstChar === '$') {
            // return str;
        // }
        
 // Трети  вариант проверки всегда возращаем строку, дописывая перед ней знак доллара.
 
  // if (lastChar === '$') {
            // slicedPart = str.slice(0, str.length - 1);
            // return $ + slicedPart.
        // } else if (firstChar === '$') {
            // return str;
        // } else {
            // return '$' + str;
        // }
    // }
    
  // Теперь если мы посмотрим в браузер то увидим все цифры в едином формате!!!!



var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
    $scope.money1 = "1.22$";
    $scope.money2 = "$2.33";
    $scope.money3 = "4.33";
});

app.filter('moneyFilter', function(){
    return function (str) {
        var lastChar = str.slice(-1);
        var firstChar = str.slice(0, 1);

        if (lastChar === '$') {
            slicedPart = str.slice(0, str.length - 1);
            return '$' + slicedPart;
        }else if (firstChar === '$') {
             return str;
         }else {
             return '$' + str;
         }
    };
});
    

