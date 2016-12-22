console.log('Задание №1');

//Создание массива из музыкальных инструментов

 music = [
'Скрипка','гавайская гитара','альт','виолончель','Барабан','флейта','Фагот','тамбурин','гобой',
'Кларнет','маракас','балалайка','рояль', 'губная гармоника','ксилофон','пианино', 'контрабас','Труба',
'тарелки','тромбон','валтура','баян','аккордеон','бубон','альпийский рог'
];

// Вывод массива

console.log('Вывод массива:', music);

// Задание  №2
// Фильтрация по строчной букве

let smallLetter = music.filter(x => x[0] === x[0].toLowerCase());

console.log('Вывод массива, отфильтрованного по строчной букве:\n');
console.log(smallLetter);

//  Задание №3
// Отсортировать массив по количеству  слов

console.log('Массив отфильрованый по количеству слов:\n\n', music.sort(function(a, b) {
  if(a.split(" ").length > b.split(" ").length) {
    return 1;
  }
  if(a.split(" ") < b.split(" ")) {
    return -1;
  }
  return 0;
}));

// Задание №4
// Создать массив слов, встречающихся в строке
// Cоздать массив частоты использования символов

console.log('\Ответ 4-го задания:');
music.forEach(task4);

function task4(element) {
    let wordArr = spliter(element);
    let frequency = letterCounter(element);
    console.log('\nСлова в строке:' + wordArr);
    for (let i = 0; i < frequency.symbol.length; i++)
    console.log('Кол-во символов "' + frequency.symbol[i] + '": ' + frequency.number[i]);
}

function spliter(music) {
    return music.includes('-') ? music.split('-') : music;
}

function letterCounter(music) {
  let letters = {char:[], number:[]};
  let charmas = music.split('');
  letters.symbol = unique(charmas);
  letters.symbol.forEach(function(element) {
    letters.number.push(charmas.filter(x => x === element).length);
  });
  return letters;
}

function unique(charmas) {
  let result = [];
  charmas.forEach(function(element) {
    if(result.indexOf(element) == '-1')
      result.push(element);
    });
  return result;
}


