import React, {useState} from 'react';
import '../styles/Header.css';
import lupa from '../assets/lupa.png';



const Header = ({setSearch}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        console.log(inputValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(inputValue.trim().length > 1) {
            setSearch(inputValue);
            setInputValue('');
        }
    }


    
    return ( 
        <>
            <header className="header">
                <div className="container-main">
                    <div className="logo">
                        <a href="/"><img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.16.2/mercadolibre/logo__large_plus.png" alt="logo"/></a>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="nav-busqueda">
                            <input 
                                type="text" 
                                name="busqueda"
                                value={inputValue}
                                id="busqueda"
                                placeholder="Nunca dejes de buscar"
                                onChange={handleInputChange}
                            />
                            <button type="submit">
                                <img src={lupa} alt="lupa"/>
                            </button>
                        </div>
                    </form>
                </div>
            </header>
        </>
    );
}
 
export default Header;