const LIGHT = "LIGHT"
const DARK = "DARK"
const L_S_NAME = "THEME" // Nome no Local Storage

const dark = {
    "background": "#1a1a1a",
    "textPrimary": "#E0E0E0",
    "shadowCard": "0 4px 8px rgba(255, 255, 255, 0.1)",
    "shadowCardHover": "0 4px 8px rgba(255, 255, 255, 0.2)",
    "inputBg": "#121212",
    "inputBorder": "#1c1c1c"
};

const light = {
    "background": "#FFFFFF",
    "textPrimary": "#000000",
    "shadowCard": "0 4px 8px rgba(0, 0, 0, 0.1)",
    "shadowCardHover": "0 4px 8px rgba(0, 0, 0, 0.2)",
    "inputBg": "#fff",
    "inputBorder": "#ddd"
};

const switchTheme = chosen => {
    let theme = {};
    if (!chosen) theme = light;
    if (chosen === DARK) theme = dark;
    else if (chosen === LIGHT) theme = light;
    localStorage.setItem(L_S_NAME, chosen || LIGHT);
    applyStyle(theme);
};

const applyStyle = style => {
    let setStyle = document.documentElement.style;

    //Background
    setStyle.setProperty("--main-bg-color", style.background);
    //Principal Text color
    setStyle.setProperty("--text-color", style.textPrimary);

    //Box shadow .card
    setStyle.setProperty("--bs-card", style.shadowCard);
    setStyle.setProperty("--bs-card-hover", style.shadowCardHover);

    //input
    setStyle.setProperty("--input-bg", style.inputBg);
    setStyle.setProperty("--input-border", style.inputBorder);

};

export { LIGHT, DARK, L_S_NAME }

export default switchTheme;