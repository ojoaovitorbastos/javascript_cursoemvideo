let valores = [8, 7, 5, 2, 4, 6]

/*
for (var pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`A posicão ${pos} tem o valor ${valores[pos]}`)
}