document.addEventListener("DOMContentLoaded", (e) => {
  const inputTel = document.querySelector(".input-tel");
  const msg = document.querySelector(".message-error");
  const scrollLinks = document.querySelectorAll(".btn-order");

  //Проверка ввода инпут

  inputTel.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^0-9\.]/g, "");
    if (!e.target.value) {
      msg.style.display = "block";
    }
    if (e.target.value) {
      msg.style.display = "none";
    }
  });

  //Таймер обратного отсчета
  let timerMinutes = 60 * 30;
  let displayTimer = document.querySelector(".order__timer");
  startTimer(timerMinutes, displayTimer);

  function startTimer(duration, display) {
    let timer = duration,
      minutes,
      seconds;
    setInterval(() => {
      minutes = Math.floor(timer / 60);
      seconds = Math.floor(timer % 60);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = `${minutes}:${seconds}`;

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  // Слайдер

  $(".reviews__container").slick({
    infinite: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  //Анимация при клике на якорь

  for (let i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].addEventListener("click", (e) => {
      e.preventDefault();

      const id = e.target.getAttribute("href");

      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
});
