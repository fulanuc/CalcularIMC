function calculo(form) 
{
    var peso = form.peso.value;
    var altura = form.altura.value;
    var resultado = peso / (altura * altura);
    var resposta;
    
    if( resultado < 17 )
        resposta = "encontra-se abaixo do peso";
    else if( resultado >= 17 && resultado <= 18.49 )
        resposta = "Abaixo do peso!";
    else if( resultado >= 17.5 && resultado <= 24.99 )
        resposta = "Peso normal";
    else if( resultado >= 25 && resultado <= 29.99 )
        resposta = "Sobrepeso";
    else if( resultado >= 30 && resultado <= 34.99 )
        resposta = "Obesidade de nível 1. Procure um profissional";
    else if( resultado >= 35 && resultado <= 39.99 )
        resposta = "Obesidade de nível 2 (Avançada). Procure um profissional com urgência";
    else if( resultado > 40 )
        resposta = "Obesidade de nível 3 (Mórbida). Necessário acompanhamento médico constante";
    
    alert( resposta );
}


