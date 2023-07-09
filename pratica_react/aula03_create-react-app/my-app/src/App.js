function MeuBotao(props){
  return (
    <button type="button">{props.label} - {props.idade}</button> 
  )
}


function Pessoa(props) {
  return(
    <section>
    voce é {props.idade >= 18 ? 'de maior' : 'de menor'}
    </section>
  )
  }
function App(){
  const labelBotao = 'Entre por aqui';
  return (
    <div className="App">
    <Titulo/>
    <Pessoa idade={19} />
    <article>
      <h2>SUbtitulo</h2>
      <p>sua frase de demonstração sera digitada aqui</p>
    </article>
    <MeuBotao label={'${labelBotao} !!!'} idade={30}/>
    </div>
  );
}

export default App;
