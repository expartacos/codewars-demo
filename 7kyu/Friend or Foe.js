
let a = ["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"];
let nomes = a.map(amigo);

function amigo(elemento){
    let b = []
    if(elemento.length === 4 && (typeof elemento) === "string"){
        return b.push(elemento);
    }
}

console.log (nomes);
