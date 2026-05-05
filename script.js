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

/* aparecer o elemento na div */
document.querySelectorAll('td').forEach(td => {
        td.addEventListener("mouseover", (event) => {
        const celula = event.currentTarget;
        const elemento = celula._elemento;
        if (!elemento) return;
        
        document.getElementById("detalhes").innerHTML =`
            <h1>${elemento.nome}</h1>`
            document.getElementById("detalhes").style.backgroundColor = elemento.corGrupo
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
