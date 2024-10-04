import React, { useContext } from 'react'
import TemaContexto from '../TemaContexto';


function ComponenteTema() {
    const { isDarkMode } = useContext(TemaContexto);

    return (
        <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
            {/* Conteúdo do componente */}
        </div>
    );
}

export default ComponenteTema