let arreglo = [10, 5, 12, 7, 9, 2, 1, 21] 

function ordenar(array){
    let mit = array.length / 2

    if (array.length < 2) return array

    let izq = array.splice(0, mit)
    return acom(ordenar(izq),ordenar(array))

}
function acom(iz, de){
    let arr = []
    while (iz.length && de.length) {
        if (iz[0] < de[0]){
            arr.push(iz.shift())
        }
        else{
            arr.push(de.shift())
        }
    }
    return [...arr, ...iz, ...de]
}
console.log(ordenar(arreglo));