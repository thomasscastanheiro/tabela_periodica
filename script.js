
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


document.querySelectorAll('td').forEach(td => {
        td.addEventListener("mouseover", (event) => {
        const celula = event.currentTarget;
        const elemento = celula._elemento;
        if (!elemento) return;
        
        document.getElementById("detalhes").innerHTML =`
            <h1>${elemento.nome}</h1>`
})        
})
const metal = document.getElementById("metal")
metal.addEventListener("mouseover", (event) => {
    colecaoElementos.forEach((elemento) => {
        if (elemento.grupo != "metal") {
            tabela.rows[elemento.linha-1].cells[elemento.coluna-1].style.backgroundColor = "#ffffff"
        }
        metal.addEventListener("mouseout", () => {
            document.querySelectorAll('td').forEach((celula) => {
                const elemento = celula._elemento;
                if (!elemento) return;
                celula.style.backgroundColor = elemento.corGrupo
            })
        })
    })
})
