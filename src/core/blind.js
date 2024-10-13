import { GameProgress } from "@/core/storage/progress-checker";

const REPLACE_TEXT = /[^ \n\t]+/uig;
const OUTPUT_TEXT = "fuck";
const HEX_LETTERS = "0123456789ABCDEF";

export function fuckify(elem) {
  // The news ticker is the MOST IMPORTANT part about this mod
  if (elem.classList?.contains("c-news-ticker")) return;

  if (elem.nodeValue === null) {
    for (const ele of elem.childNodes) {
      fuckify(ele);
    }
  } else {
    elem.nodeValue = elem.nodeValue.replaceAll(REPLACE_TEXT, OUTPUT_TEXT);
  }
}

export function chooseRandom(opts) {
  return opts[Math.floor(Math.random() * opts.length)];
}

function randomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += chooseRandom(HEX_LETTERS);
  }
  return color;
}

export function randomNumber(a, b) {
  return a + (b - a) * Math.random();
}

function setProp(prop, thing, priority) {
  document.body.style.setProperty(prop, thing, priority);
}

function profreeze() {
  setTimeout(() => {
    const now = Date.now();
    while ((Date.now() - now) < 3000);
    profreeze();
  }, randomNumber(60000, 90000));
}

function proui() {
  setTimeout(() => {
    GameOptions.toggleUI();
    proui();
  }, randomNumber(5000, 60000));
}

export function prohtmlsetup() {
  setProp("background-color", randomColor());
  setProp("color", randomColor(), "important")
  setInterval(() => {
    setProp("background-color", randomColor());
    setProp("color", randomColor(), "important")
  }, 60000);

  setProp("animation", "a-spin4d-better 80s infinite");

  setInterval(() => {
    const css = chooseRandom([
      // Shrink and grow
      () => `scale(${randomNumber(0.5, 1.5)})`,
      // Move
      () => `translate(${randomNumber(-0.5, 0.5) * 100}vw, ${randomNumber(-0.5, 0.5) * 100}vh)`,
      // Tilt
      () => `rotate(${randomNumber(-180, 180)}deg)`
    ])();

    setProp("transform", css);
  }, 60000);
  profreeze();
  proui();
}

function prohtmlcore() {
  const stageAt = GameProgress.all.findLastIndex(i => i.hasReached(player));
  const progressAt = GameProgress.all[stageAt].subProgressValue(player);
  const stageMax = GameProgress.all.length;

  const progress = Math.clamp((stageAt + progressAt) / stageMax, 0, 1);
  const blurFactor = progress * 0.3;

  setProp("opacity", 1 - 0.3 * progress);
  setProp("filter", `blur(calc(max(1vw, 1vh) * ${blurFactor}))`);

  requestAnimationFrame(prohtmlcore)
}

prohtmlcore()