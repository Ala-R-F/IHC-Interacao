function calcula (){
    var valid = document.getElementById("valor").value;
    try {
        if(valid == ""){
            alert("Preencha um valor!");
            throw "Está vazio.";
        }
        if(isNaN(valid)){
            alert("Preencha um valor!");
            throw "Está vazio.";
        }
        valid = Number(valid);
        
        var isso=document.getElementById("10");
        
        var isChecked = isso.checked;
        if (isChecked==true) {
            return valid*10/100;
        }
        else{
            
            isso=document.getElementById("20");
            
            var isChecked = isso.checked;
            if (isChecked==true) {
                    return valid*20/100;
            }
            else{
                
                isso=document.getElementById("30");
                
                var isChecked = isso.checked;
                
                if (isChecked==true) {
                    return valid*30/100;
                }
                else {
                    return 0;
                }
            }
        }
    }
    
    catch(err) {
    document.getElementById("porcentagem").value = "Erro: " + err;
    return 0;
    }
}
function calculaGeral(){
    var atual = parseFloat(document.getElementById("valor").value);
    var porc = calcula();

    var jur = document.getElementById("jur");
    var isChecked = jur.checked;

    var des = document.getElementById("desc");
    var isCheckedDes = des.checked;

    if (isChecked == true){
        atual = atual + porc;
        document.getElementById("final").value = atual;
    }
    else if (isCheckedDes == true){
        atual = atual - porc;
        document.getElementById("final").value = atual;
    }

}