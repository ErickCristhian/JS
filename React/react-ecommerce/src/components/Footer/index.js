import React from "react";
import './style.css'

function Footer() {
  return (
    <footer class="p-5">
      <div>
        <address>
          Escreva para: <a href="mailto:deumerda@exemplo.com">Lixo Bag</a>.{" "}
          <br />
          Visite o site: Lixoshop;
          <br />
          Rua do fim, Marte, -8
          <br />
          Universo
        </address>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9417.09504571563!2d-34.83144283704883!3d-7.079453816773763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acddba1cefb8df%3A0x6296b6346d1ab903!2sCaribessa!5e0!3m2!1spt-BR!2sbr!4v1637262279048!5m2!1spt-BR!2sbr"
          width="90%"
          height="300"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div>
        <form class="d-flex flex-column">
          <label for="email">Seu E-mail:</label>
          <input type="email" name="email" id="email" />
          <label for="assunto">Assunto:</label>
          <input type="text" name="assunto" id="assunto" />
          <label for="corpo">Mensagem</label>
          <input type="text" name="corpo" id="corpo" />

          <button type="submit">Entrar em contato</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
