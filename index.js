import entrada from 'readline-sync';
console.log("\nAplicação de juros\n")

if (divida > 0) {

    var divida = entrada.question("\nInforme o valor da divida sem juros: ");

    if (dias_em_atraso > 0) {

        var dias_em_atraso = entrada.question("Informe quantos dias em atraso: ");
        var juros = 0;
        var valor_final = (divida / 100) * juros + Number(divida);


        if (dias_em_atraso > 15) {
            juros = 10;
            valor_final = (divida / 100) * juros + Number(divida);
        } else {
            juros = 5;
            valor_final = (divida / 100) * juros + Number(divida);
        }

        console.log("\nO valor original da divida é: R$" + divida);
        console.log("São " + dias_em_atraso + " dia(s) em atraso");
        console.log("Taxa de juros: " + juros + "%");
        console.log("Valor total com juros: R$" + valor_final);

    } else {
        console.log("Você está em dia!");
    }

} else { console.log("O valor da dívida deve ser maior que zero!") }