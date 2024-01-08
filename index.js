
 function carregar () {
 const conteudoDiv1 = document.querySelector('#conteudo_div_1');
 const imagem = document.getElementById('imagem_manha'); 
 const data = new Date();
 const horaAtual = data.getHours();
 
 if (horaAtual >= 0 && horaAtual < 12) {
    conteudoDiv1.innerHTML = `Bom dia! Agora são ${horaAtual} da manhã.`
    imagem.src = 'manha.jpg'
    document.body.style.backgroundColor = '#FFD700'
 }

else if (horaAtual >= 12 && horaAtual < 17) {
    conteudoDiv1.innerHTML = `Boa tarde! Agora são ${horaAtual} da tarde!.`
    imagem.src = 'tarde.jpg'
    document.body.style.backgroundColor = '#FF4500'
}


else {
    conteudoDiv1.innerHTML= `Boa noite! Agora são ${horaAtual} da noite.`
    imagem.src ='noite.jpg'
    document.body.style.backgroundColor = '#7B68EE'
}

 }

 
