import React from "react";
import "./style.css";

function Header() {
  const html = document.querySelector("html");
  const checkbox = document.querySelector("input[name=theme]");

  const getStyle = (element, style) =>
    window.getComputedStyle(element).getPropertyValue(style);

  const initialMode = {
    bg: getStyle(html, "--bg"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
    bgSecondary: getStyle(html, "--bg-secondary"),
  };
  const darkMode = {
    bg: "#333333",
    colorHeadings: "#3664FF",
    colorText: "#FCFCFC",
    bgSecondary: "#333333",
  };

  const transformKey = (key) =>
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

  const changeColors = (colors) => {
    Object.keys(colors).map((key) =>
      html.style.setProperty(transformKey(key), colors[key])
    );
  };

  checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(darkMode) : changeColors(initialMode);
  });

  return (
    <header>
      <h1>Hello</h1>
      <div>
        <div class="toggle">
          <input id="switch" type="checkbox" name="theme" />
          <label for="switch" className="switch">
            Toggle
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;
