import React, {useReducer, useState, useEffect} from "react"
import {useThemeContext} from './App';

const initialState = {
    disabled: false,
    name: 'Derik',
    age:29,
};

function reducer(state, action){
    switch(action.type){
        case 'SET-DISABLE':
        return{
            ...state,
            disabled: action.payload
        }
        default:
            return state;
        
    }

}

const Assento = (props) =>{
   const [ state, dispatch ] = useReducer(reducer, initialState);

   const handleclick = () => {
    /*setDisabled(true);*/
    dispatch({
        type: 'SET-DISABLE',
        payload: true
    });
    }

    useEffect(() => {
        console.log('nasceu')


    }, []);

   /* useEffect(() => {
        if(disabled){
        console.log('Disabled alterou para ', disabled)
        }
    }, [disabled]);*/
    
    const value = useThemeContext();

    return (
    
        <button 
              className="assento" 
              type="button"
              disabled={state.disabled}
              onClick={() => handleclick()}
        >
              {state.disabled ? 'X' : <span style={{color: value.color, fontFamily:value.font}}>{props.pos}</span>}
        
            </button> 

            )
    
}
   


const Fileira = (props) => {
    return (
        <div className="fileira">
            {[0, 1, 2, 3].map((pos, index) =>(
                <Assento key={index} pos={props.de + pos}/>
            ))}

        </div>

    )

}

export const AssentosOnibus = () => {
    return(
        <div className="container">
            {[1, 5, 9, 13, 17].map((pos, index) =>(
               <Fileira key={index} de={pos} />
            ))}
        </div>
    )
}