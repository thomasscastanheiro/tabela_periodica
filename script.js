const tabela = document.getElementById("tabela")

colecaoElementos.forEach((elemento) => {
    tabela.rows[elemento.linha-1].cells[elemento.coluna-1].innerHTML = `
    <h4>${elemento.numeroAtomico}</h4>
    <h3>${elemento.simbolo}</h3>
    <p>${elemento.nome}</p>
    <p>${elemento.massaAtomica}</p>`
    tabela.rows[elemento.linha-1].cells[elemento.coluna-1].style.backgroundColor = "#"+elemento.corGrupo

})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          