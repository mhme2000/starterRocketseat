function experiencia(anos) {
    // código aqui
    switch(anos) {
        case 0:
            console.log('Iniciante')
            break
        case 1:
        case 2:
            console.log('Intermediário')
            break
        case 3, 4, 5, 6:
            console.log('Avançado')
            break
        default:
            console.log('Jedi Master')
            break
    }
}
   var anosEstudo = 7;
   experiencia(anosEstudo);
   // De 0-1 ano: Iniciante
   // De 1-3 anos: Intermediário
   // De 3-6 anos: Avançado
   // De 7 acima: Jedi Master
   