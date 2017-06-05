/** Со звездочкой */
/**
 * Создать страницу с кнопкой
 * При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией
 * Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 * Запрощено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/**
 * homeworkContainer - это контейнер для всех ваших домашних заданий
 * Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер
 *
 * @example
 * homeworkContainer.appendChild(...);
 */
let homeworkContainer = document.querySelector('#homework-container');

/**
 * Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 * Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 * Функция НЕ должна добавлять элемент на страницу
 *
 * @return {Element}
 */
function createDiv() {
  var div = document.createElement('div'),
    color = '#',
    arr = '0123456789ABCDEF'.split('');
  for (var i = 0; i < 6; i++) {
    color += arr[Math.floor(Math.random() * 15)];
  }
  div.style.width = Math.random() * 100 + 'px';
  div.style.height = Math.random() * 100 + 'px';
  div.style.top = Math.random() * 100 + 'px';
  div.style.left = Math.random() * 100 + 'px';
  div.style.background = color;
  div.classList.add('draggable-div');
  return div;
}

/**
 * Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop
 *
 * @param {Element} target
 */
function addListeners(target) {

  target.onmousedown = function (e) {
   // debugger;
    target.style.position = 'absolute';
    moveAt(e);
    target.style.zIndex = 1000;
    document.body.appendChild(target);
    target.ondragstart = function() {
      return false;
    };

    function moveAt(e) {
      target.style.left = e.pageX - target.offsetWidth / 2 + 'px';
      target.style.top = e.pageY - target.offsetHeight / 2 + 'px';
    }

    document.onmousemove = function (e) {
      moveAt(e);
    };
    target.onmouseup = function () {
      document.onmousemove = null;
      target.onmouseup = null;
    }
  }
}

let addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  // создать новый div
  let div = createDiv();

  // добавить на страницу
  homeworkContainer.appendChild(div);
  // назначить обработчики событий мыши для реализации d&d
  addListeners(div);
  // можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
  // или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/
});

export {
  createDiv
};
