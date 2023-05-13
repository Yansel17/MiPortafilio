//Ir arriba
$(document).ready(function () {
  $(".go-to-top").click(function () {
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".go-to-top").slideDown(300);
    } else {
      $(".go-to-top").slideUp(300);
    }
  });
});

//Validación en javascript acá

const form = document.getElementById("frm");
const re = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const email = document.getElementById("mi__email");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // console.log(form.nombre.value);
  // console.log(form.email.value);
  // console.log(form.asunto.value);
  // console.log(form.mensaje.value);

  if (form.nombre.value.trim() == "") {
    alert("El nombre no puede ir vacio.");
  } else if (!re.test(form.email.value)) {
    alert("El email está vacio o es incorrecto.");
  } else if (form.subject.value.trim() == "") {
    alert("El asunto no puede ir vacio.");
  } else if (form.comments.value.trim() == "") {
    alert("El mensaje no puede ir vacio.");
  } else {
    const enviar = new FormData(this);
    // email.setAttribute("href=");
  }
});
