// ['E>R', 'R>U', 'P>E'] => PERU; 
// ['I>T', 'S>W', 'T>Z', 'W>I', 'Z>E', 'N>D', 'R>L', 'E>R', 'A>N', 'L>A'] => SWITZERLAND

const roughFun = (arr) => {
    // console.log(arr);
    var greaterArr = [];
    var smallerArr = [];
    arr.map((item) => {
        greaterArr.push(item[0]);
        smallerArr.push(item[2]);
    })
    // console.log(greaterArr);
    // console.log(smallerArr);
    greaterArr.map((item) => {
        if(!(smallerArr.find((item2) => item === item2))){
            console.log(item);
        }
    })
    return "Working";
}

console.log(roughFun(['I>T', 'S>W', 'T>Z', 'W>I', 'Z>E', 'N>D', 'R>L', 'E>R', 'A>N', 'L>A']));
console.log(roughFun(['E>R', 'R>U', 'P>E']));