var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];
   
function printResults(objeto){
    for(let value of objeto){
        console.log(`O ${value.nome} possui as habilidades: ${value.habilidades.join(', ')}`)
    }
}

printResults(usuarios)