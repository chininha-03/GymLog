import { createContext, useState } from 'react';

const TemaContexto = createContext({
    isDarkMode: false,
    toggleTheme: () => {}
});

export default TemaContexto;