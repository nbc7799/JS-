const rabbit = document.querySelector("#rabbit");
const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  rabbit.scrollIntoView({ behavior: "smooth", block: "center" });
});
