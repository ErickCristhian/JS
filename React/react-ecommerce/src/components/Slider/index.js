import React, { useEffect } from "react";
import "./style.css";


function Slider() {
  useEffect(() => {
    let time = 3000,
      currentImageIndex = 0,
      images = document.querySelectorAll("#items #item img"),
      max = images.length;

    function nextImage() {
      images[currentImageIndex].classList.remove("selected")
      currentImageIndex++;

      if (currentImageIndex >= max) currentImageIndex = 0;

      images[currentImageIndex].classList.add("selected")
    }

    function start() {
      setInterval(() => {
        nextImage();
      }, time);
    }

    window.addEventListener("load", start);
  }, []);

  return (
    <section id="slider">
      <div id="items">
        <div id="item">
          <img src="https://images.unsplash.com/photo-1636646931278-cf779e5acaac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80" />
        </div>
        <div id="item">
          <img src="https://images.unsplash.com/photo-1635777076099-489c9b37ea3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" />
        </div>
        <div id="item">
          <img
            className="selected"
            src="https://images.unsplash.com/photo-1634796395411-86b612641c0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80"
          />
        </div>
      </div>
    </section>
  );
}

export default Slider;
