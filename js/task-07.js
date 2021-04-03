const fontSizeControlEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

fontSizeControlEl.addEventListener("input", () => {
    textEl.style.fontSize = `${fontSizeControlEl.value * 32 / 100}px`
});