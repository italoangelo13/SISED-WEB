function load(){
    $('body').loading({
        stoppable: false
      });
}

function unload(){
    $('body').loading('stop'); 
}


function caixaMsg(msg, titulo, tipo){
    var tipoMsg;
    var btn;
    if(tipo == 1){//Erro
        tipoMsg = 'red';
        btn = 'btn-red';
    }
    else if(2){//sucesso
        tipoMsg = 'green';
        btn = 'btn-green';
    }



    $.confirm({
        title: titulo,
        content: msg,
        type: tipoMsg,
        typeAnimated: true,
        buttons: {
            tryAgain: {
                text: 'Ok',
                btnClass: btn,
            }
        }
    });
}