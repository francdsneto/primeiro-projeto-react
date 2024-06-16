import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    // ! this.contador = 0; Se esse valor atualizar dentro do componente, não será renderizado imediatamente na tela.
    this.state = {
      contador: 0,
      name: "Um Nome",
      password: "",
    };
  }

  render() {
    return (
      <div style={{ marginTop: "20px", marginLeft: "20px" }}>
        <h1>{this.state.contador}</h1>
        <div>
          <button
            onClick={() => {
              this.setState({ contador: this.state.contador - 1 });
            }}>
            Diminuir
          </button>
          <button
            onClick={() => {
              this.setState({ contador: this.state.contador + 1 });
            }}>
            Aumentar
          </button>
        </div>

        <form style={{ marginTop: "20px" }}>
          <label>{this.state.name}</label>
          <br />
          <input
            type="text"
            placeholder="Nome"
            value={this.state.name}
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
          />
          <br />
          <label>{this.state.password}</label>
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Senha"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
