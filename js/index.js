const reposToIgnore = [
    'Cristuker/You-Dont-Know-JS', 
    'Cristuker/Form-example', 
    'Cristuker/DiarioClasseDigital',
    'Cristuker/api-restful-typescript',
    'Cristuker/POO-Prac',
    'Cristuker/articles-code',
    'Cristuker/feministech.github.io',
    'Cristuker/NextJS-Study',
    'Cristuker/fullCycle',
    'Cristuker/Extensoes-Maneiras-Para-Sua-IDE', 
    'Cristuker/eloquente-javascript', 
    'Cristuker/Cristuker', 
    'Cristuker/rxjs', 
    'Cristuker/elixir-prac', 
    'Cristuker/LearningGo'
];

function changeLanguage(language = 'pt') {

    switch (language) {
        case 'pt': {
            const bio = document.getElementById('bio');
            bio.innerHTML = `Sou desenvolver Fullstack focado em JS. Amo trabalhar com JS e seus frameworks, 
            atualmente eu tenho experiência em Angular, React, Node.js, NestJS e Next.js. Gosto de trabalhar como 
            Fullstack porém também aceito oportunidades apenas como desenvolvedor backend. Estou sempre estudando e 
            buscando me aperfeiçoar para ser sempre a minha melhor versão.
            `;

            const skills = document.getElementById('skillTitle');
            skills.innerHTML = `HABILIDADES`;

            const project = document.getElementById('projectTitle');
            project.innerHTML = `PROJETOS`;

            const footer = document.getElementById('footer');
            footer.innerHTML = `Mais informações em: <a target="_blank" href="https://bento.me/cmsdev">bento.me/cmsdev</a>`;

            break;
        }
        case 'en': {
            const bio = document.getElementById('bio');
            bio.innerHTML = `I'm developing Fullstack focused on JS. 
            I love working with JS and its frameworks, currently 
            I have experience in Angular, React, Node.js, NestJS and Next.js. I like working as a Fullstack but 
            I also accept opportunities only as a backend developer. I'm always studying and looking to improve 
            myself to always be my best version.`;

            const skills = document.getElementById('skillTitle');
            skills.innerHTML = `SKILLS`;

            const project = document.getElementById('projectTitle');
            project.innerHTML = `PROJECTS`;

            const footer = document.getElementById('footer');
            footer.innerHTML = `More information: <a target="_blank" href="https://bento.me/cmsdev">bento.me/cmsdev</a>`;

            break;
        }
        default: {
            console.log('Opção invalida!');
        }
    }
}


const listComponents = data => {
    return data.map((repo) => {
        return (`
         <div  ${Math.floor(Math.random() * 10) % 2 === 0 ? 'data-aos="flip-right"' : 'data-aos="flip-left"'} class="project" alt="One of my project and they description">
             <a class="repoUrl" href="${repo.html_url}" target="blank" id="projectTitle">${repo.full_name}</a>
             <p id="description">${repo.description}</p>
             <span id="language">${repo.language ? repo.language : ' - '}</span>
         </div>
         `)
    }).join('');
}

const listArticles = data => {
    return data.map((article) => {
        return (`
         <div ${Math.floor(Math.random() * 10) % 2 === 0 ? 'data-aos="flip-right"' : 'data-aos="flip-left"'} class="project" alt="One of my project and they description">
             <a class="repoUrl" href="${article.canonical_url}" target="blank" id="projectTitle">${article.title}</a>
             <p id="description">${article.description}</p>
             <div id="tagsContainer">
                ${article.tag_list.map(tag => `<span class="tag">#${tag}</span>`)}
             </div>
         </div>
         `).replaceAll(',', '');
    }).join('');
}

function getRepository() {
    const header = new Headers({
        'User-agent': 'Mozilla/4.0 Custom User Agent'
    })
    fetch('https://api.github.com/users/Cristuker/repos', header)
        .then(response => response.json())
        .then(data => {
            const repos = data.filter(repo => {
                return reposToIgnore.includes(repo.full_name) ? '' : repo.full_name;
            });
            const reposDiv = document.getElementById('allProjects');
            reposDiv.innerHTML = listComponents(repos);
        })

}


function getArticles() {
    const header = new Headers({
        'User-agent': 'Mozilla/4.0 Custom User Agent'
    })
    fetch('https://dev.to/api/articles?username=cristuker', header)
        .then(response => response.json())
        .then(data => {
            const reposDiv = document.getElementById('allArticles');
            reposDiv.innerHTML = listArticles(data)
        })

}

function main() {
    getRepository();
    getArticles();
}