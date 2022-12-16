import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Nastaran",
    lastName: "Moghadasi",
    initials: "js",
    position: "a Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Amsterdam'
        },
        {
            emoji: "💼",
            text: "Passionate Software Developer"
        },
        {
            emoji: "📧",
            text: "nastaran.moghadasi@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/NastaranMO",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/nastaran-moghadasi/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    bio: "Hello! I'm Nastaran. I'm a Full-Stack developer. I studied CompSci at Parand University! I believe learning never ends! You should hire me!",
    skills:
    {
        proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css', 'mongodb'],
        exposedTo: ['nodejs', 'typescript', 'express']
    }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
    ],
    portfolio: [
        {
            title: "Project 1",
            live: "https://tic-tac-toe-app.herokuapp.com/",
            source: "https://github.com/NastaranMO/tic-tac-toe",
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://popular-github-repos.netlify.app/battle",
            source: "https://github.com/NastaranMO/popular-github-repo",
            image: mock2
        },
    ]
}