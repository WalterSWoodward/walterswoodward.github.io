import {
    TOGGLE_DROP_DOWN
} from "../actions";
import { faReact, faJs, faLinux, faPhp, faNodeJs } from "@fortawesome/free-brands-svg-icons";

const initialState = {
    projects: {
        "Jaguar Land Rover - Full Stack JS App": {
            tool_icons: [faJs, faLinux, faNodeJs],
            title: "Jaguar Land Rover Full Stack Vehicle Infotainment JavaScript Application",
            frontend_tools: "JavaScript, Webpack 5",
            backend_tools: "NodeJS",
            database_tools: "JLR's Infotainment System Storage APIs",
            text: "Currently I work for Jaguar Land Rover as a Senior Full Stack Software Developer. In the last fourteen months I have spent the majority of my time building a full stack web application which was demonstrated to the highest levels of Jaguar Land Rover's leadership in December 2021. Since then I have continued to work with a small team to build out a corresponding backend application primarily responsible for downloading content for the application to consume from various third party servers.",
        },
        "Scan123 Web Application": {
            tool_icons: [faLinux, faPhp],
            title: "Scan123 Web Application",
            frontend_tools: "HTML, JavaScript, SASS",
            backend_tools: "Linux, Nginx, PHP",
            database_tools: "MySQL",
            text: "During my time at Scan123 I worked with a small agile scrum team to build out and maintain two web applications. The first was an internal web application used for employees at Scan123 to monitor client data metrics (primarily billing). The second was their customer facing web application. Highlights of the work I contributed to at Scan123 included building a custom REST framework built with core PHP, building and maintaining a custom mySQL query builder designed to interface with Scan123's unique database structure, and buiding a search microservice using Sphinx Search.",
            deploy_link: "https://scan123.com/"
        },
        "handicapped-pets": {
            tool_icons: [faJs],
            title: "HandicappedPets SureFit Calculator",
            frontend_tools: "JavaScript, WordPress",
            backend_tools: "PHP",
            database_tools: "mySQL",
            text: "A tool that I built in 2019 that customers at handicappedpets.com still use to get the correct sized wheelchair for their pet.",
            deploy_link: "https://www.handicappedpets.com/wheelchair-sizer/",
        },
        "portfolio": {
            tool_icons: [faReact],
            title: "Portfolio Website",
            frontend_tools: "React, Redux, Sass/Scss",
            deployment_tools: "Netlify",
            text: "A web application that I built to make it easier for prospective employers to look at what I am working on and contact me.",
            code_link: "https://github.com/walterswoodward/portfolio",
        }
    },
    dropDownOpen: false
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DROP_DOWN:
            return { ...state, dropDownOpen: !state.dropDownOpen };
        default:
            return state;
    }
};
