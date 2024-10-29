const range_check = document.querySelector(".range_check");
const p = document.querySelector(".box p");
const color_choose = document.querySelector(".color_choose");
const bgcolor_choose = document.querySelector(".bgcolor_choose");
const fonts = document.querySelectorAll(".font_family");
const weight = document.querySelectorAll(".weight");

console.log(weight);

range_check.oninput = (e) => {
  p.style.fontSize = `${e.target.value}px`;
};

bgcolor_choose.oninput = (e) => {
  document.body.style.backgroundColor = `${e.target.value}`;
};

color_choose.oninput = (e) => {
  p.style.color = `${e.target.value}`;
};

fonts.forEach((font) => {
  font.onchange = (e) => {
    p.style.fontFamily = `${e.target.value}`;
  };
});

weight.forEach((w) => {
  w.onchange = (e) => {
    p.style.fontWeight = `${e.target.value}`;
  };
});
