import {useContext} from 'react';
import { ThemeContext } from './App';
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

function ItemvooDetails({ details }) {
  const value = useContext(ThemeContext);
  return (
    
    <ul>
      {details.map(detail => (
        <li key={detail.id} style={{color: value.color, fontFamily: value.font}}>{detail.title}</li>
      ))}
    </ul>

  )
}


function Itemvoo({ title, children }) {
  return (
    <div className='voo'>
      <header>
        <h3>{title}</h3>
      </header>
      <div className='voo-details'>
        {children}
      </div>
    </div>
  )
}

function Voos() {
  return (
    <div className="voos">
      {voosDisponiveis.map(voo => (
        <Itemvoo key={voo.id} title={voo.title}>
          <ItemvooDetails details={voo.details} />
        </Itemvoo>
      ))}
    </div>
  );
}

export default Voos;
