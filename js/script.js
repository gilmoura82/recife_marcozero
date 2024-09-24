const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
  smoothScrollTo(0, distanceFromTheTop);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}

function validaCampos() {

  const nome = document.querySelector("#nome");
  const email = document.querySelector("#email");
  const assunto = document.querySelector("#assunto");
  const mensagem = document.querySelector("#mensagem");
  

  if (document.querySelector("#nome").value.length > 50) {
    alert("Campo nome não pode ter mais de 50 caracteres");
    document.querySelector("#nome").focus();
    nome.value = "";
  } 
  
  if (document.getElementById("email").value.length > 50) {
    alert("Campo e-mail não pode ter mais de 50 caracteres");
    document.getElementById("email").focus();
    email.value = "";
  } 
  
  if (document.getElementById("assunto").value.length > 50) {
    alert("Campo assunto não pode ter mais de 50 caracteres");
    document.getElementById("assunto").focus();
    assunto.value = "";
  } 

  if (nome.value != "" && email.value != "" && assunto.value != "" && mensagem.value != "") {
    validaMensagem();
  } 
  
}

// Envia a mensagem seguindo as regras de negócio e mostra os dados transmitidos
function validaMensagem() {
  alert("Email Enviado Com Sucesso!!!" + "\n");
  alert("Dados Enviados: " + "\n" + "Nome: " + nome.value + "\n" + "E-mail: " + email.value + "\n" + "Assunto: " + assunto.value + "\n" + "Mensagem: " + mensagem.value);
}


// Mostra o limite de caracteres da mensagem
function limite_textarea(valor) {
  quant = 300;
  total = valor.length;
  if(total <= quant) {
      resto = quant - total;
      document.getElementById('cont').innerHTML = resto;
  } else {
      document.getElementById('mensagem').value = valor.substr(0,quant);
  }
}