import React from "react";

/**
 * Componente em classe é uma classe que herda a classe Component do React, e retorna o HTML de dentro do metodo render.
 */

class App extends React.Component {
  /**
   * Exemplo de construtor e de como adicionar uma variável local no reacts
   */
  // constructor() {
  //   super();
  //   this.nome = "Neto";
  // }

  // Render é o método responsável para renderizar o conteúdo HTML do componente
  render() {
    return (
      <div>
        <h1>Aprendenndo React</h1>
        <h2>{this.nome}</h2>
        <p>Parágrafo teste.</p>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <h1>Aprendenndo React</h1>
//     </div>
//   );
// }

export default App;
