
const states=["varanasi","delhi","uttrakhand","bangalore","ranchi",1233,907];
for(let i=0;i<=states.length;i++)//FOR LOOP
{
    if(typeof states[i]!=="string")continue;//typeof 
    console.log(states[i])
}

let j=0;//WHILE LOOPS
while(j<states.length)
{   
    
    console.log(states[j])
    j++;
}

let s=37;//DO WHILE LOOP
do{
    console.log(s);
    s++;
}while(s<states.length)