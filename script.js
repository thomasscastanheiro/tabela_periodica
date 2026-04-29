
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
        td.addEventListener("click", (event) => {
        const celula = event.currentTarget;
        const elemento = celula._elemento;
        if (!elemento) return;
        detalhes.style.display = "block"
        
        document.getElementById("detalhes").innerHTML =`
            <button id="fechar">X</button>
            <h1>${elemento.nome}</h1>`

        document.getElementById("fechar").addEventListener("click", () => {
        document.getElementById("detalhes").style.display = "none"
})
})
        
})
