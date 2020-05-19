console.log("<h1>Привет!</h1>".match(/<\/?[a-z][a-z0-9]*>/gi)); // <h1>, </h1>



var reg = /\.{3,}/g;
console.log("Привет!... Как дела?.....".match(reg)); // ..., .....



function solution(str) {
  str = str.length % 2 === 0 ? str : str + "_";
  return str.match(/.{1,2}/g);
}
console.log(solution("abc")); // should return ['ab', 'c_']
console.log(solution("abcdef")); // should return ['ab', 'cd', 'ef']



var str = "Можно писать color или colour (британский вариант)";
console.log( str.match(/colou?r/g) ); // color, colour



console.log( "100 10 1".match(/\d0*/g) ); // 100, 10, 1



var re = /#\w{6}\b/ig;
var str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678"
console.log( str.match(re) )  // #121212, #AA00ef



var re = /\d+(\.\d+)?/g;
var str = "1.5 0 12. 123.4.";
console.log( str.match(re) );   // 1.5, 0, 12, 123.4



var re = /-?\d+(\.\d+)?/g;
var str = "-1.5 0 2 -123.4.";
console.log( str.match(re) );   // -1.5, 0, 2, -123.4



var str = '...<a href="link1" class="wrong">... <p style="" class="doc">...';
var str2 = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
var reg = /<a href="[^"]*" class="doc">/g;
// Сработало!
console.log(str.match(reg), str2.match(reg)); // <a href="link" class="doc">



var re = /<!--[\s\S]*?-->/g;
var str = '.. <!-- Мой -- комментарий \n тест --> ..  <!----> .. ';
console.log( str.match(re) ); // '<!-- Мой -- комментарий \n тест -->', '<!---->'



var re = /<[^>]+>/g;
var str = '<> <a href="/"> <input type="radio" checked> <b>';
console.log( str.match(re) ); // '<a href="/">', '<input type="radio" checked>', '<b>'
