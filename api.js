'use strict';

//Задание №5

global.api = {};
api.requires = {
  fs: require('fs'),
  rdsync : require('readline-sync'),
  arr: require('./array.js')
}
api.utils = {};

//Searching for the elements in a text file
api.utils.textSearch = function (arr) {
  var fs = api.requires.fs;
  var rd = api.requires.rdsync;
  //creating a hash-table
  let obj = {};
  arr.forEach(item => {
    obj[item] = true;
  });
  let path = rd.question('Enter the path (text search task): ');
  fs.readFile(path, 'utf8', (err, data) => {
    if(err) throw err;
    //an array of words without punctuation
    let words = data.replace(/[/.,!?:^\uFEFF]*/g, '').split(' ');
    //hash lookup (for better perfomance)
    words.forEach(element => {
      if(obj[element])
        console.log('A word was found: ' + element);
    });
  });
}

//creating a hash-table using DJB hash-function
api.utils.hashFunc = function (arr){
  let obj = {};
  arr.forEach(element =>{
    let hash = 5381;
    for(let i in element){
      hash = ((hash << 5) + hash) + element.charCodeAt(i);
    }
    obj[hash] = element;
  });
  return obj;
}

//hash-lookup
api.utils.hashSearch = function(arr){
  var rd = api.requires.rdsync;
  let obj = api.utils.hashFunc(arr);
  console.log('Here is your hash-table:\n' + JSON.stringify(obj, null, '\t'));
  let hash = rd.question('Enter the hash: ');
  if(hash in obj) console.log('Here is your value: ' + obj[hash]);
  else console.log('Invalid hash! No value can be found.');
}

api.utils.hashSearch(api.requires.arr);
api.utils.textSearch(api.requires.arr);
