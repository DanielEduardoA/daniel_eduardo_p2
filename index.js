function calculaValor(input){
	var operacao = input.value;
	if(operacao.includes("=")){
		var operando1 = operacao.substr(1, 2);
		var operando2 = operacao.substr(4, 2);
		var campo1 = document.getElementById(operando1.toLowerCase());
		var campo2 = document.getElementById(operando2.toLowerCase());
		var valor1;
		var valor2;
		if(operacao.includes("+")){
			 if(campo1.value == null || campo1.value === ""){
				 valor1 = 0;
			 } else {
				valor1 =  parseInt(campo1.value)
			 }
			 if(campo2.value == null || campo2.value === ""){
				 valor2 = 0;
			 } else {
				 valor2 = parseInt(campo2.value);
			 }
		 document.getElementById(input.id).value =  valor1 + valor2;
		} else {
			if(campo1.value == null || campo1.value === ""){
				 valor1 = 0;
			 } else {
				valor1 =  parseInt(campo1.value)
			 }
			 if(campo2.value == null || campo2.value === ""){
				 valor2 = 0;
			 } else {
				 valor2 = parseInt(campo2.value);
			 }
		 document.getElementById(input.id).value = valor1 - valor2;
		}
	}
}