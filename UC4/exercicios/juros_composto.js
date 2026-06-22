function juroscomposto (){
let m 
let p = 2000
let i = 0.03
let t = 12
m = p * (1 + i) ** t
console.log('O saldo após 12 meses será: ', m. toFixed(2))
}
juroscomposto ()