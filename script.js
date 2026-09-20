document.addEventListener("DOMContentLoaded", () => {

  const diveBtn = document.getElementById("diveBtn");
  const jellySecret = document.getElementById("jellySecret");
  const replayBtn = document.getElementById("replayBtn");
  const bigJelly = document.getElementById("bigJelly");
  const toast = document.getElementById("toast");
  const bubbles = document.getElementById("bubbles");

  /* =========================
     SMOOTH SCROLL
  ========================== */

  function goTo(id) {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }

  /* Dive In */

  diveBtn.addEventListener("click", () => {
    goTo("birthday");
  });


  /* =========================
     JELLYFISH SECRET
  ========================== */

  jellySecret.addEventListener("click", () => {

    goTo("secret");

    setTimeout(() => {
      showToast("لقيتي السر 🪼🤍");
    }, 700);

  });


  /* =========================
     BIG JELLYFISH
  ========================== */

  bigJelly.addEventListener("click", () => {

    bigJelly.style.transform = "scale(1.2)";

    setTimeout(() => {
      bigJelly.style.transform = "";
    }, 350);

    showToast(
      "كل عام وأنتِ بخير يا توري 🪼🤍"
    );

  });


  /* =========================
     REPLAY
  ========================== */

  replayBtn.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });


  /* =========================
     WISHES
  ========================== */

  const wishes = document.querySelectorAll(".wish");

  const wishMessages = [

    "وأتمنى ضحكتك تصير أكثر من كل شيء يزعلك. 🤍",

    "وأتمنى حولك دائمًا أشخاص تحسين معهم إنك في بيتك.",

    "وأتمنى كل حلم صغير خبّيتيه بقلبك يلقى طريقه لك.",

    "وأتمنى تكون سنتك الجديدة ألطف عليك من كل اللي قبلها."

  ];

  wishes.forEach((wish, index) => {

    wish.addEventListener("click", () => {

      wish.classList.toggle("revealed");

      const message = wishMessages[index];

      if (wish.classList.contains("revealed")) {

        showToast(message);

        wish.querySelector("strong").textContent = "♡";

      } else {

        wish.querySelector("strong").textContent = "＋";

      }

    });

  });


  /* =========================
     FLOATING BUBBLES
  ========================== */

  function createBubble() {

    const bubble = document.createElement("span");

    bubble.className = "bubble";

    const size = Math.random() * 14 + 5;
    const left = Math.random() * 100;
    const duration = Math.random() * 8 + 7;

    bubble.style.setProperty(
      "--size",
      `${size}px`
    );

    bubble.style.setProperty(
      "--left",
      `${left}%`
    );

    bubble.style.setProperty(
      "--duration",
      `${duration}s`
    );

    bubbles.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, duration * 1000);

  }


  for (let i = 0; i < 18; i++) {
    setTimeout(createBubble, i * 500);
  }

  setInterval(createBubble, 900);


  /* =========================
     CLICK BUBBLES
  ========================== */

  document.addEventListener("click", (event) => {

    if (
      event.target.closest("button") ||
      event.target.closest("article")
    ) {
      return;
    }

    createClickBubble(
      event.clientX,
      event.clientY
    );

  });


  function createClickBubble(x, y) {

    const bubble = document.createElement("span");

    bubble.style.position = "fixed";
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
    bubble.style.width = "10px";
    bubble.style.height = "10px";
    bubble.style.border = "1px solid #b8edff88";
    bubble.style.borderRadius = "50%";
    bubble.style.pointerEvents = "none";
    bubble.style.zIndex = "40";
    bubble.style.transition = "1s ease";

    document.body.appendChild(bubble);

    requestAnimationFrame(() => {

      bubble.style.transform =
        "translateY(-45px) scale(1.8)";

      bubble.style.opacity = "0";

    });

    setTimeout(() => {
      bubble.remove();
    }, 1000);

  }


  /* =========================
     TOAST
  ========================== */

  let toastTimer;

  function showToast(message) {

    clearTimeout(toastTimer);

    toast.textContent = message;

    toast.classList.add("show");

    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 3500);

  }

});
