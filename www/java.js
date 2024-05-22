var RM
var NM

armazenamento = localStorage

function cadastrar ()
{
    RM = document.getElementById('rmAluno').value
    NM = document.getElementById('nmALUNO').value

    alert(RM)
    alert(NM)

    localStorage.setItem(RM, NM)
}

function pesquisar()
{
    RM = document.getElementById('pesquisarRM').value
    var valorpesquisado

    valorpesquisado = localStorage.getItem(RM)

    document.getElementById('visor').innerHTML = valorpesquisado
}
