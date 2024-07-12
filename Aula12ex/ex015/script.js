function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var gênero = " ";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "criançahomem.png");
        img.setAttribute("alt", "Foto");
      } else if (idade < 35) {
        //Jovem
        img.setAttribute("src", "adultohomem.png");
        img.setAttribute("alt", "Foto");
      } else if (idade < 60) {
        //Adulto
        img.setAttribute("src", "meiaidadehomem.png");
        img.setAttribute("alt", "Foto");
      } else {
        //Idoso
        img.setAttribute("src", "velhohomem.png");
        img.setAttribute("alt", "Foto");
      }
    } else if (fsex[1].checked) {
      gênero = "Mulher";
      if (idade >= 0 && idade < 15) {
        //Criança
        img.setAttribute("src", "criançamulher.png");
      } else if (idade < 35) {
        //Jovem
        img.setAttribute("src", "adultomulher.png");
      } else if (idade < 60) {
        //Adulto
        img.setAttribute("src", "meiaidademulher.png");
      } else {
        //Idoso
        img.setAttribute("src", "velhomulher.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
