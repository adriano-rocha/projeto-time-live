function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minute = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minute} minutos`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagemmanha.png'
        document.body.style.background = '#a7896c'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'imagemtarde.png'
        document.body.style.background = '#f5b172'
    } else  {
        //BOA NOITE!
        img.src = 'imagemnoite.png'
        document.body.style.background = '#011121'
    
    }
    }