/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
  for (var i = 0; array.length > i; i++) {
    fn(array[i], [i], array);
  }
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
  // debugger;
  var copy = [];
  for (var i = 0; array.length > i; i++) {
    copy.push(fn(array[i], [i], array, copy));
  }
  return copy;
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
  debugger;
  if (initial == undefined) {
    var j = 1,
      sum = array[0];
  } else {
    var j = 0;
    sum = initial;
  }
  for (var i = j; array.length > i; i++) {
    sum = fn(sum, array[i], i, array)
  }
  return sum;
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    delete obj[prop];
  }
  return;
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
  if (obj[prop] == undefined) {
    return false;
  }
  return true;
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
  var arr = [];
  for (var prop in obj) {
    arr.push(prop);
  }
  return arr;
}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
  var arr = [];
  for (var prop in obj) {
    arr.push(prop.toUpperCase());
  }
  return arr;
}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from, to) {
  //debugger;
  var arr = [];
  if (from == undefined) {
    from = 0;
  } else if (from < 0 && Math.abs(from) > array.length) {
    from = 0;
  } else {
    from = from;
  }
  if (to > array.length || to == undefined) {
    to = array.length;
  } else if (to < 0) {
    to = array.length + to;
  } else {
    to = to;
  }
  for (from; to > from; from++) {
    arr.push(array[from]);
  }
  return arr;
}

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
  // debugger;
  var proxy = {};
  proxy = new Proxy(obj, {
    set(target, prop, value){
      target[prop] = Math.pow(value, 2);
      return true;
    }
  });
  return proxy;
}

export {
  forEach,
  map,
  reduce,
  deleteProperty,
  hasProperty,
  getEnumProps,
  upperProps,
  slice,
  createProxy
};
