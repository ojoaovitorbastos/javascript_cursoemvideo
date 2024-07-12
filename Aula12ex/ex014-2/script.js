function carregar() {
  let data = new Date();
  let hora = data.getHours();
  let min = data.getMinutes()
  let tittle = document.querySelector("h1#txthora");
  let tittle2 = document.querySelector("h2#txtbom");
  let img = document.querySelector("img#img");
  tittle.innerHTML = `Agora são ${hora} Horas e ${min} Minutos.`;

  if (hora >= 4 && hora < 12) {
    tittle2.innerHTML = "Bom dia!";
    img.src = "fotomanha.png";
    document.body.style.background = "#218068";
  } else if (hora >= 12 && hora <= 18 && min <= 30) {
    tittle2.innerHTML = "Boa tarde!";
    img.src = "fototarde.png";
    document.body.style.background = "#f17b44";
  } else {
    tittle2.innerHTML = "Boa noite!";
    img.src = "fotonoite.png";
    document.body.style.background = "#080e29";
  }
}
