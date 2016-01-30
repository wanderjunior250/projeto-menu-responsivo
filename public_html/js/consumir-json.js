/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//endereço do JSON a ser baixado
var endereco = 'http://www.w3schools.com/angular/customers.php';

//chamada do ajax do jquery
$.ajax({
    
    url: endereco,
    
    //metodo que consome o json e devolve um objeto JSON contendo um array records com todos os parametros
    complete: function (res) {
        var meuJSON = JSON.parse(res.responseText);
        
        //chamada do metodo que desenha a tabela através do jquery com os dados do array meuJSON.records
        desenharTabela(meuJSON.records);
    }

});//fim da requisição ajax

//metodo para desenhar a tabela, recebe um obj array
function desenharTabela(JSON) {
    for (var i = 0; i < JSON.length; i++) {
        //chama do metodo que desenha as linhas da tabela atras dos parametros de cada elemento do array contido no json
        desenharLinha(JSON[i]);
    }
}//fim metodo desenharTabela


//metodo que desenha as linhas da tabela
function desenharLinha(linhaJSON) {
    var linha = $("<tr />");
    $("#tabelaJSON").append(linha); 
    linha.append($("<td>" + linhaJSON.Name + "</td>"));
    linha.append($("<td>" + linhaJSON.City + "</td>"));
    linha.append($("<td>" + linhaJSON.Country + "</td>"));
}//fim metodo desenharLinha

