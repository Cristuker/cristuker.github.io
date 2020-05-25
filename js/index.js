
function changeLanguage(language = 'pt') {

    switch (language) {
        case 'pt': {
            const bio = document.getElementById('bio');
            bio.innerHTML = `Fascinado na área de tecnologia desde 2014, com fome de conhecimento, codar se transformou na minha paixão. 
            Em ambito profissional, tenho boa desenvoltura em trabalho em equipe e resolução de problemas. 
            Sempre estudando para ser a melhor versão do meu lado profissional. Focado na Stack Node.js, React.js e futuramente React Native.`
            break;
        }
        case 'es': {
            const bio = document.getElementById('bio');
            bio.innerHTML = `Fascinado en el área de tecnología desde 2014, ávido de conocimiento, el codar se ha convertido en mi pasión.
            En un entorno profesional, tengo buenas habilidades en trabajo en equipo y resolución de problemas.
            Siempre estudiando para ser la mejor versión de mi lado profesional. Centrado en Stack Node.js, React.js y más tarde React Native.`
            break;
        }
        case 'en': {
            const bio = document.getElementById('bio');
            bio.innerHTML = `Fascinated in the technology area since 2014, hungry for knowledge, codar has become my passion.
            In a professional environment, I have good skills in teamwork and problem solving.
            Always studying to be the best version of my professional side. Focused on Stack Node.js, React.js and later React Native.`
            break;
        }
        default:{
            console.log('Opção invalida!');
        }
    }
}