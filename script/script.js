function validateEmail() {

  var email = document.getElementById("email").value;
  var texto = document.getElementById("texto").value;

  if (!texto) {
    alert("Erro no envio: Insira uma mensagem");
  } else if (!email || validateCaracteres(email)) {
    alert("Erro no envio: Endereço de e-mail inválido");
  } else {
    alert("Obrigado pelo contato, " + getUser(email) + "!");
  }
}

function validateCaracteres(email) {

  if (getUser(email).length > 32 && getUser(email).length < 1) {
    return true;
  } else if (getDomain(email).length > 16 && getDomain(email).length < 1) {
    return true;
  } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
    return true;
  } else {
    return false;
  }

}

function getUser(email) {
  return String(email).split("@", 1);
}

function getDomain(email) {
  return String(email).split("@", 2)[1].split(".", 1);
}