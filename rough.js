// ['E>R', 'R>U', 'P>E'] => PERU; 
// ['I>T', 'S>W', 'T>Z', 'W>I', 'Z>E', 'N>D', 'R>L', 'E>R', 'A>N', 'L>A'] => SWITZERLAND

const roughFun = (arr) => {
    var greaterArr = [];
    var smallerArr = [];
    var str = "";
    arr.map((item) => {
        greaterArr.push(item[0]);
        smallerArr.push(item[2]);
    })
    var greatestChar;
    greaterArr.map((item) => {
        if(!(smallerArr.find((item2) => item === item2))){
            greatestChar = item;
        }
    })
    str = greatestChar;
    while(str.length != arr.length+1){
        str = str + arr.find((item) => str[str.length-1] == item[0])[2];
    }
    return str;
}

console.log(roughFun(['I>T', 'S>W', 'T>Z', 'W>I', 'Z>E', 'N>D', 'R>L', 'E>R', 'A>N', 'L>A']));
console.log(roughFun(['E>R', 'R>U', 'P>E']));