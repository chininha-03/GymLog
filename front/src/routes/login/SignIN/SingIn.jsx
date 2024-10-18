import React from "react";
import "./SingIn.css";
import Footer from "../../../components/Footer/Footer";

const SingIn = () => {
  return (
    <>
      <div className="divMaster-SingIn">
        <form className="form-SingIn">
          <p className="title">Registrar </p>
          <p className="message">
            Cadastre-se agora e tenha acesso ao nosso aplicativo.{" "}
          </p>
          <div className="flex col-6 col-lg-6 col-md-6">
            <label for="validationDefault01">
              <input
                className="input-SignIn"
                type="text"
                placeholder=""
                required
                id="validationDefault01"
              />
              <span>Nome</span>
            </label>

            <label for="validationDefaultUsername">
              <input
                className="input-SignIn"
                type="text"
                placeholder=""
                required
                id="validationDefaultUsername"
              />
              <span>Sobrenome</span>
            </label>
          </div>

          <label for="validationDefault03">
            <input
              className="input-SignIn"
              type="email"
              placeholder=""
              required
              id="validationDefault03"
            />
            <span>Email</span>
          </label>

          <label for="validationDefault04">
            <input
              className="input-SignIn"
              type="password"
              placeholder=""
              required
              id="validationDefault04"
            />
            <span>Senha</span>
          </label>
          <label>
            <input
              className="input-SignIn"
              type="password"
              placeholder=""
              required
            />
            <span>Confirmar Senha</span>
          </label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck2"
              required
            />
            <label class="form-check-label" for="invalidCheck2">
              Concordar com os termos e condições
            </label>
          </div>
          <input type="submit" className="submit shadow-pop-bl mb-3" />
        </form>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default SingIn;
