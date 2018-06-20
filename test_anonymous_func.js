str2.replace(/[Ａ]/g, function(s){
  console.log("s ", s);
  //return str2;
});

(function () {
    console.log("excute");
}());

var sample = function() {
       return (function() {  // The function returns when you call it
           return "something"
       })();
}

console.log(sample);
console.log( sample() );

//16進数の場合
str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
});
