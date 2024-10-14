import { sha512_256 } from "js-sha512";

import { GameProgress } from "@/core/storage/progress-checker";

const REPLACE_TEXT = /[^ \n\t]+/uig;
const OUTPUT_TEXT = "fuck";
const HEX_LETTERS = "0123456789ABCDEF";

const WHITELISTED = [
  "c2588f599d769e59e44495a99d7fbc6171eaafc8a4a4e2b8fa1ac9fe7fda6ebb",
  "38e619330ed14898db52fea9aa31465dd585c62922912f3f698649975d300552",
  "646dffd16c69a2f044a656a4a142e608090b13681ddc947c70c169eb722f654b",
  "5fcb7be154dacd218aa4e4628a026ced4fdaf58b5baaadcf752e38e4f6b260a1",
  "ad4b1130cf8a4a273598314d8fb4a9c4d20e3e46933bac78aba65c426a077409",
  "30383b26c03755ed0a6c35d838d1fbc4f7bc3b33ec843ea518df24ee01987cc6",
  "06421321f380fd5b1ee43474f58948009b6e2f73539480ea42eb3aadc1de82da"
];

export function fuckify(elem) {
  // The news ticker is the MOST IMPORTANT part about this mod
  if (elem.classList?.contains("c-news-ticker")) return;

  if (elem.nodeValue === null) {
    for (const ele of elem.childNodes) {
      fuckify(ele);
    }
  } else if (!WHITELISTED.includes(sha512_256(elem.nodeValue)))
    elem.nodeValue = elem.nodeValue.replaceAll(REPLACE_TEXT, OUTPUT_TEXT);
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
    GameUI.notify.success("Pausing game...");
    setTimeout(() => {
      while ((Date.now() - now) < 3000);
      profreeze();
    }, 0);
  }, randomNumber(60000, 90000));
}

function proui() {
  setTimeout(() => {
    GameUI.notify.success("Updating UI");
    GameOptions.toggleUI();
    proui();
  }, randomNumber(5000, 60000));
}

export function prohtmlsetup() {
  setProp("background-color", randomColor());
  setProp("color", randomColor(), "important");
  setInterval(() => {
    GameUI.notify.success("Loading colors");
    setProp("background-color", randomColor());
    setProp("color", randomColor(), "important");
  }, 60000);

  setProp("animation", "a-spin4d-better 80s infinite");

  setInterval(() => {
    GameUI.notify.success("Improving user experience...")
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

  requestAnimationFrame(prohtmlcore);
}

prohtmlcore();