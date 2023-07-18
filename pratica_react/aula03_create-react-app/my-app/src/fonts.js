import { ThemeContext} from './App';
export const Fonts = () => {
    return (
        <ThemeContext.Consumer>
            {(value) =>(
                   <div>
                   <button type="button" onClick={() => value.setFont('arial')}>Arial</button>

                   <button type="button" onClick={() => value.setFont('Tahoma')}>Tahoma</button>

                   <button type="button" onClick={() => value.setFont('Verdana')}>Verdana</button>
               </div>
            ) }
        </ThemeContext.Consumer>
 
    )
}