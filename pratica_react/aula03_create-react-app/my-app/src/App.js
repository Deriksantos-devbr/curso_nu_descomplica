import React from 'react';
import Voos from './voos';
import { AssentosOnibus } from './AssentosOnibus';

const Titulo = () => (
  <h2>
    <span>Olá, </span>
    <strong>mundo3</strong>
    !!!
  </h2>
);

class MeuBotao extends React.Component {
  imprime() {
    console.log('Imprime aqui');
  }

  handleClick(e) {
    e.preventDefault();
    this.imprime();
    console.log(this);
  }

  render() {
    return (
      <a onClick={(e) => this.handleClick(e)} href="https://descomplica.com.br">
        {this.props.label} - {this.props.idade}
      </a>
    );
  }
}

function PessoaIdade(props) {
  return <strong>{props.label}</strong>;
}

function Pessoa(props) {
  if (props.idade < 10) {
    return <h4>Área restrita</h4>;
  }
  return (
    <section>
      Você é {props.idade >= 18 && <PessoaIdade label="de maior" />}
    </section>
  );
}

const ListItem = ({ label }) => {
  return <li>{label}</li>;
};

const Lista = () => {
  const passos = [
    'Configurar projeto',
    'Embedar react',
    'Criar  componentes',
    'Escrever testes',
    'Fazer deploy',
  ];

  return (
    <ul>
      {passos.map((valor, index) => (
        <ListItem key={`item-${index}`} label={valor} />
      ))}
    </ul>
  );
};

function App() {
  const labelBotao = 'Entre por aqui';
  return (
    <div className="App">
      <Titulo />
      <AssentosOnibus />
      <MeuBotao label={`${labelBotao}!!!`} idade={30} />
      <Voos />
      <Lista />
      <Pessoa idade={19} />
      <Pessoa idade={14} />
      <Pessoa idade={54} />
      <Pessoa idade={11} />
      <Pessoa idade={8} />
      <article>
        <h2>SubTitulo</h2>
        <p>Frasse de exemplo</p>
      </article>
    </div>
  );
}

export default App;
