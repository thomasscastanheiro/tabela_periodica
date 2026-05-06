/* colocando os elementos na tabela */
const tabela = document.getElementById("tabela")

colecaoElementos.forEach((elemento) => {
    const celula = tabela.rows[elemento.linha-1].cells[elemento.coluna-1]
    celula.innerHTML = `
    <h4>${elemento.numeroAtomico}</h4>
    <h3>${elemento.simbolo}</h3>
    <p>${elemento.nome}</p>
    <p>${elemento.massaAtomica}</p>`

    tabela.rows[elemento.linha-1].cells[elemento.coluna-1].style.backgroundColor = elemento.corGrupo
    celula._elemento = elemento
    
    
})         

function normalizar(texto) {
    return texto.split(" ").map(palavra => 
            palavra.charAt(0).toUpperCase() + palavra.slice(1)
        ).join(" ")
}

/* aparecer o elemento na div */
document.querySelectorAll('td').forEach(td => {
        td.addEventListener("mouseover", (event) => {
        const celula = event.currentTarget;
        const elemento = celula._elemento;
        if (!elemento) return;
        
        document.getElementById("detalhes").innerHTML =`
            <h1 id="nomedoelemento">${elemento.nome}  -  ${elemento.simbolo}</h1>
            <h2>Massa Atômica: ${elemento.massaAtomica}</h2>
            <h2>Número Atômico: ${elemento.numeroAtomico}</h2>
            <h2>Configuração Eletrônica: ${elemento.configuracaoEletronica}</h2>
            <h2>Grupo: ${normalizar(elemento.grupo)}</h2>
            <h2>Ano de Descoberta: ${elemento.anoDeDescoberta}</h2>
            `

            document.getElementById("detalhes").style.backgroundColor = elemento.corGrupo
            document.getElementById("nomedoelemento").style.backgroundColor = elemento.corGrupo
            document.getElementById("nomedoelemento").style.filter = "brightness(90%)"
}) 
})

/* classificações dos elementos, filtrá-los */
document.querySelectorAll("#classificacoes div").forEach((bloco) => {
    colecaoElementos.forEach((elemento) => {
        bloco.addEventListener("mouseover", () => {
        if (elemento.grupo != bloco.dataset.grupo) {
             tabela.rows[elemento.linha-1].cells[elemento.coluna-1].style.opacity = "0.2" 
        }
    })
})
    bloco.addEventListener("mouseout", () => {
         document.querySelectorAll('td').forEach((celula) => {
                const elemento = celula._elemento;
                if (!elemento) return;
                celula.style.opacity = "1"
         })
    })
})
