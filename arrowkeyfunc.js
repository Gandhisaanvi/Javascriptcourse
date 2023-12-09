var isEven = (element)=>
{
    return element % 2 === 0;
}

console.log(isEven(2));
var key= [2,4,6,8].every(isEven);//check every element of the array
console.log(key);
var res=[2,4,6,8,3,30,10,14].every((e)=> e%2==0 )//one line function using arrow key
console.log(res);