function contar() {
  let inicio = document.getElementById("txtinicio");
  let fim = document.getElementById("txtfim");
  let passo = document.getElementById("txtpasso");
  let res = document.getElementById("res");

  if (inicio.value.length == 0 || fim.value.length == 0) {
    res.innerHTML = "[ERRO] Preencha todos os dados!";
    res.style.color = "red";
  } else {
    res.innerHTML = `Contando: `;
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if (p == 0) {
      alert('Não econtramos valor para PASSO, então PASSO = 1')
        p = 1;
    }

    if (i <= f) {
      for (var c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449} `;
      }
    } else {
      for (var c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1f449} `;
      }
    }
    res.innerHTML += ` \u{1F3C1}`;
  }
}
