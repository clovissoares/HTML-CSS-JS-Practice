const bar = document.getElementById("bar");

console.log("Primeiro")
for (let i = 1; i <= 9; i++) {
    if(i===1) {
        console.log(0)
        i++;
    };
    console.log(
    ((100 / 9) * i)
    );
};
console.log("Segundo")
for (let i = 0; i < 20; i++) {
    if(i===20) { 
        console.log(100)} 
    else {
        console.log(((100 / (20 - 1)) * i))
    }
    
}
