import React from "react";

const voosDisponiveis = [
  {
    id: '123',
    title: 'Volta ter. 19 de julho',
    details: [
      {
        id: '132',
        title: 'espaço para as pernas dentro da media (76 cm)'
      },
      {
        id: '133',
        title: 'Saida usb no acento'
      },
      {
        id: '134',
        title: 'Video sobre demanda'
      },
      {
        id: '135',
        title: 'Estimativa das emissões de carbono: 83 kg'
      },
    ]
  },
  {
    id: '151',
    title: '13:00 - 15:15',
    details: [
      {
        id: '132',
        title: 'espaço para as pernas dentro da media (76 cm)'
      },
      {
        id: '133',
        title: 'Saida usb no acento'
      },
      {
        id: '134',
        title: 'Video sobre demanda'
      },
      {
        id: '135',
        title: 'Estimativa das emissões de carbono: 83 kg'
      },
    ]
  }
];

function Itemvoo(props) {
  return (
    <div className="voo">
      <header>
        <h3>{props.title}</h3>
      </header>
      <ul>
        {props.details.map((detail) => (
          <li key={detail.id}>{detail.title}</li>
        ))}
      </ul>
    </div>
  );
}

function Voos() {
  return (
    <div className="voos">
      {voosDisponiveis.map((voo) => (
        <Itemvoo key={voo.id} title={voo.title} details={voo.details} />
      ))}
    </div>
  );
}

export default Voos;
