
let a = ["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"];
let nomes = a.filter(amigo);

function amigo(elemento){
    if(elemento.length === 4 && (typeof elemento) === "string"){
        return elemento;
    }
}

console.log (nomes);
