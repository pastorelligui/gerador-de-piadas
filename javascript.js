var frases = [
  'Comprei um óculos vermelho para VERMELHOR',
   'Eu tinha um grande amigo chamado Ritos, um dia eu estava comendo salgadinho e ele me pediu. Eu respondi: DORITOS',
    'Um caipira chegou na casa do amigo que estava assistindo TV e perguntou: E aí Firme? O amigo respondeu: Não, Futebor',
     'O que o pagodeiro foi fazer na igreja? Cantar Pá God',
      'Por que as plantinhas não falam? Porque elas são mudinhas.',
      'Ei, por que você não ligou o chuveiro? Porque esse xampu é para cabelos secos.',
      'Quer saber um bom chá para a calvície? É o chá-péu.',
      'O que o tomate foi fazer no banco? Foi tirar extrato.',
      'Qual é a parte do computador preferida dos astronautas? A barra de espaço.',
      '2 litros de leite atravessaram a rua e foram atropelados. Um morreu, o outro não, por quê? Por que um deles era Longa Vida!',
      'Por que o Batman colocou o batmóvel no seguro? Porque ele tem medo que robin.',
      'Você sabe qual a diferença entre a lagoa e a padaria? Na lagoa há sapinho, e na padaria, assa pão.'

];

 var fundo= [
 "http://www.designbolts.com/wp-content/uploads/2014/03/Marron-Mixed-High-resolution-blurr-background1.jpg", "http://www.designbolts.com/wp-content/uploads/2014/03/Light-HD-Background1.jpg", "http://www.designbolts.com/wp-content/uploads/2014/03/Multi-color-blur-background1.jpg", "http://www.designbolts.com/wp-content/uploads/2014/03/Light-Blue-blur-background1.jpg", "http://www.designbolts.com/wp-content/uploads/2014/03/Yellow-blur-background1.jpg", "http://www.designbolts.com/wp-content/uploads/2014/03/Bright-Blue1.jpg", "http://www.designbolts.com/wp-content/uploads/2014/03/Purple-Blur-Background1.jpg", "http://www.designbolts.com/wp-content/uploads/2014/03/Blue-Blur-Background1.jpg", "http://www.designbolts.com/wp-content/uploads/2014/03/Sea-green-blur-background1.jpg", "http://www.designbolts.com/wp-content/uploads/2014/03/best-blurred-background-wallpaper1.jpg"
 ]


function novafrase() {

//Muda a frase sempre que a função é chamada
var aleatorio = Math.floor(Math.random() * (frases.length));
document.getElementById('frase').innerHTML = frases[aleatorio];

//muda a imagem do background sempre que a função é chamada
var i = Math.floor((Math.random() * (fundo.length)));
document.body.style.backgroundImage = "url('"+fundo[i]+"')";

 //muda a imagem no div da direita de acordo com a frase
  if (frases[aleatorio] == frases[1]) {
  document.getElementById('right').style.background = "url('http://i.imgur.com/vu0S20q.png')";
}

  if (frases[aleatorio] == frases[0]) {
  document.getElementById('right').style.background = "url('https://acegif.com/wp-content/gif/disgust-49.gif')";
}

    if (frases[aleatorio] == frases[2]) {
  document.getElementById('right').style.background = "url('https://acegif.com/wp-content/gif/disgust-49.gif')";
}

      if (frases[aleatorio] == frases[3]) {
  document.getElementById('right').style.background = "url('https://s.yimg.com/ny/api/res/1.2/rzVTkJk7dTBSMjL5ZSN2_w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-05/fca7bde0-9f90-11ea-9ffb-56c90e084970')";
}

        if (frases[aleatorio] == frases[4]) {
  document.getElementById('right').style.background = "url('https://c.tenor.com/B3RKN_3MmtsAAAAC/lol-cazalbe.gif')";
}

if (frases[aleatorio] == frases[5]) {
document.getElementById('right').style.background = "url('https://i.pinimg.com/originals/7f/f6/41/7ff641a80ec8831ee4798d3af40f4922.gif')";
}

if (frases[aleatorio] == frases[6]) {
document.getElementById('right').style.background = "url('http://dhecastro.com.br/wp-content/uploads/2021/01/preguica-1.gif')";
}

if (frases[aleatorio] == frases[7]) {
document.getElementById('right').style.background = "url('https://acegif.com/wp-content/gif/disgust-4.gif')";
}

if (frases[aleatorio] == frases[8]) {
document.getElementById('right').style.background = "url('https://acegif.com/wp-content/gif/disgust-5.gif')";
}

if (frases[aleatorio] == frases[9]) {
document.getElementById('right').style.background = "url('https://c.tenor.com/KpDIt7eV49MAAAAC/silvio-santos-abravanel.gif')";
}




}


//$('#tweetBtn').on('click', function() {
  //tweet();
//});

function tweetIt() {
  var phrase = document.getElementById('frase').innerText;
  var tweetUrl = 'https://twitter.com/share?text=' +
    phrase +
    '.' +
    'via @leojunioyuri';
    window.open(tweetUrl);
}
