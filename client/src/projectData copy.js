import portfolio from './assets/portfolio.png'
import me_working from './assets/me_working.jpg'
import code_editor from './assets/code_editor.png'

const data = {
    portfolio : {
        // image: portfolio,
        text: "Mon portfolio, qui remplace mon CV au format pdf. Ce projet réponds a l'unique besoin de ne plus avoir a utiliser OpenOffice pour pouvoir modifier une information sur mon Curriculum vitae.",
        title: "Portfolio",
        isHosted: true,
        repoUrl: "https://github.com/Kyustern/Portfolio",
        hostingUrl: "https://portfolio-tescher-leon.herokuapp.com",
        tags: [
            {
                "text":"ReactJS",
                "url":"https://fr.reactjs.org/",
                "key": "1"
            },
            {
                "text":"React Router",
                "url":"https://reacttraining.com/react-router/web/guides/philosophy",
                "key": "2"
            },
            {
                "text":"NodeJS",
                "url":"https://nodejs.org/en/",
                "key": "3"
            }
        ]
    },    
    forex :{
        // image: code_editor,
        width: "50%",
        text: "Une application web qui est uniquement composé d'un front-end. Ce dernier va aller fetch une API externe afin de récupérer le taux de change entre deux devises préalablement sélectionnées. Il est également possible de visualiser l'évolution de ce taux de change au cours du temps a l'aide d'un graphique.",
        title: "Visualiseur de taux de change",
        isHosted: false,
        repoUrl: "https://github.com/Kyustern/Forex-fetcher",
        hostingUrl: null,
        tags: [
            {
                text:"ReactJS",
                url:"https://fr.reactjs.org/",
                key: "1"
            },
            {
                text:"Foreign exchange rates API",
                url:"https://www.exchangeratesapi.io",
                key: "2"
            },
            {
                text:"React ChartJS 2",
                url:"https://www.npmjs.com/package/react-chartjs-2",
                key: "3"
            }
        ]
    },
    workInProgress :{
        // image: me_working,
        text: "Je travaille constamment sur de nouveaux projets, qui sait, peut être qu'il y aura quelque chose d'intéressant a la place de ce placeholder d'ici quelques jours ?",
        title: "Travail en cours",
        isHosted: false,
        tags: null,
        repoUrl: "https://github.com/Kyustern",
        hostingUrl: null
    }
}

export default data