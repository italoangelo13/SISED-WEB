function autenticar(user1, pass1) {
    load();
    //console.log('Entrou no autenticar');
    //Verifica se os campos estão preenchidos;
    var usuario = $(user1).val();
    var senha = $(pass1).val();
    var msgErro = "";
    //console.log('Usuario: ' + usuario + ' senha: ' + senha);
    if (usuario == "" || usuario == null || usuario == " ") {
        msgErro = "Informe o usuario.";
        unload();
        caixaMsg(msgErro, 'Informação Obrigatória', 1);
        return;
    }

    if (senha == "" || senha == null || senha == " ") {
        msgErro = "Informação Obrigatória";
        unload();
        caixaMsg(msgErro, 'Erro de Autenticação', 1);
        return;
    }

    var obj = {
        user : usuario,
        pass : senha
    }


    $.ajax(
        {
            type: 'POST',
            url: 'http://localhost:1998/api/usuario/AutenticarUsuario',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(obj),
            dataType: 'json',
            crossDomain: true,
            async: false,
            success: function (data) {
                console.log(data);
            }
        });
}


