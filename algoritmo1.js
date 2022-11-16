arreglo = [4, 6, 2, 1, 12, 65, 23, 19, 7]

Array.prototype.sortNumero = function(){
    return this.sort(
        function(a,b){
            return a - b
        }
    )
}

console.log(arreglo.sortNumero());