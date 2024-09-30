function adicionarLinha() {
    const nome = document.getElementById("nome").value;
    const produto = document.getElementById("produto").value;
    const marca = document.getElementById("marca").value;
    const segmento = document.getElementById("segmento").value;
    const valor = document.getElementById("valor").value;
    const datadevenda = document.getElementById("datadevenda").value;


    if (nome === '' || produto === '' || marca === '' || segmento === '' || valor === '' || datadevenda === '') {
        window.alert("PREENCHA TODOS OS DADOS!!!");
    } else {
        const tabela = document.getElementById("tabelaDados").getElementsByTagName('tbody')[0];

        
        const novaLinha = tabela.insertRow();

      
        const celNome = novaLinha.insertCell(0);
        const celProduto = novaLinha.insertCell(1);
        const celMarca = novaLinha.insertCell(2);
        const celSegmento = novaLinha.insertCell(3);
        const celValor = novaLinha.insertCell(4);
        const celDatadevenda = novaLinha.insertCell(5);

       
        celProduto.innerHTML = produto;
        celNome.innerHTML = nome;
        celMarca.innerHTML = marca;
        celSegmento.innerHTML = segmento;
        celValor.innerHTML = valor;
        celDatadevenda.innerHTML = datadevenda;

        document.getElementById("linhaForm").reset();
    }
}