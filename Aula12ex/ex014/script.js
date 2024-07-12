function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} Horas.`;

  if (hora >= 0 && hora < 12) {
    img.src = "fotomanha.png";
    document.body.style.background = "#059e40";
  } else if (hora >= 12 && hora <= 18) {
    img.src = "fototarde.png";
    document.body.style.background = "#ff8800";
  } else if (hora >= 18 && hora <= 23) {
    img.src = "fotonoite.png";
    document.body.style.background = "#09041d";
  }
}
