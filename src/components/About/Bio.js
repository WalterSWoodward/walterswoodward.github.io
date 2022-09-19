import React, { Fragment, PureComponent } from 'react';
import { NavLink } from "react-router-dom";

import BioLink from './BioLink';

class Bio extends PureComponent {
    getYearsOfExperience() {
        let firstDayAsDeveloper = new Date(2018, 11, 10);
        let diff = Date.now() - firstDayAsDeveloper;
        let msInAYear = 1000 * 60 * 60 * 24 * 7 * 52;
        let yearsSinceFirstDay = (new Date(diff).getTime() / msInAYear).toFixed(1);
        return  yearsSinceFirstDay;
    }
    render() {
        return (
            <Fragment>
                <div className='page'>
                    <div className="page-paragraph__wrap">
                        <div className="page-paragraph__header">Summary</div>
                        <div className="page__paragraph">
                            <strong className="highlight__text--secondary">Enterprise Level Experience:</strong> {this.getYearsOfExperience()} years
                            <br />
                            <strong className="highlight__text--secondary">Project Highlights</strong>
                            <br></br>
                            <div className="page__paragraph">
                                1. <span className="highlight__text--secondary">Jaguar Land Rover</span>: Built the proof of concept for a full stack javascript application integrated into Jaguar Land Rover's proprietary vehicle infotainment system.
                                <br />
                                2. <span className="highlight__text--secondary">Scan123</span>: Worked with a small dev team to build a custom LEMP stack framework for two web applications.
                                Led a small team in building a search feature which provided full OCR and real-time search of over 150 million documents.
                                <br />
                                3. <span className="highlight__text--secondary">HandicappedPets</span>: Built a LAMP stack Web Application (using jQuery, vanilla JS, CSS and HTML on the frontend) called the "SureFit Calculator" for handicappedpets.com to expedite the process of ordering custom sized wheelchairs.
                                <br />
                                4. <span className="highlight__text--secondary">The Atom Group</span>: Rebuilt an E2E test application built using NodeJS, NightWatchJS, and Selenium for IBM's Cloud Services.
                            </div>
                        </div>
                    </div>
                    <div className="page-paragraph__wrap">
                        <div className="page-paragraph__header">Web Development Experience</div>
                        <div className="page__paragraph">From January to August 2018, I attended <BioLink href="https://lambdaschool.com/courses/full-stack-web-development" title="Lambda School's Full Stack Web Development program" />.
                            I graduated with a basic understanding of JavaScript, some general familiarity with React, and exposure to all the fundamental disciplines required of a full stack web developer.
                            <br /><br />
                            I got my first job working with <BioLink href="https://www.theatomgroup.com/" title="The Atom Group" /> in Portsmouth, NH in December 2018.
                            When I arrived at The Atom Group, we were introduced to a Node.js, Selenium, and NightWatchJS E2E testing application that had been built by a recent CS graduate.
                            The structure for the application was there, but many edge cases had not been addressed, libraries utilized were out of date, the code itself was practically unreadable, and there was no documentation.
                            In my time with The Atom Group I worked with a team to address all of the above, leaving them with a working application, complete with a Getting Started guide for future developers.
                            <br /><br />
                            Nearing the end of my contract with The Atom Group, I was fortunate to find a job working with a small ecommerce company called <BioLink href="https://www.handicappedpets.com/" title="HandicappedPets.com" />.
                            HandicappedPets was looking for a way to cut down on the cost of sales calls by offering an online form that would calculate the correct sized wheelchair for any given breed.
                            I built a web application using vanilla JavaScript, PHP and mySQL, now called the <BioLink href="https://www.handicappedpets.com/wheelchair-sizer/" title="SureFit Calculator" /> which customers can use to get the correct sized wheelchair for their pet.
                            Although it has been well over a year since I left HandicappedPets, the SureFit Calculator has continued to serve its purpose, and function as their highest earning source of revenue.
                            <br /><br />
                            In November 2019, my wife and I moved out to Portland, OR, and soon after our arrival I accepted a position as a software developer at a local SaaS Document Management company called <BioLink href="https://scan123.com/" title="Scan123" />.
                            During my time at Scan123, I worked in an Agile Scrum environment and contributed code to every level of the stack; from UI/UX (HTML,CSS, JavaScript), to authentication and validation of user input (PHP), to building and revising our own mySQL query builder.
                            My largest contribution to Scan123 was resurrecting an outdated, increasingly underutilized search user interface that crashed and stalled under the weight of Scan123's growing database.
                            After deciding that we would continue to utilize the open source tool Sphinx Search as the search engine upon which to build our search microservice, I set out to familiarize myself with the technology.
                            After about a month, I was granted a couple developers to help me build out a completely new search feature involving drafting new search ui/ux designs, getting buy-in from customers through interviews, adjusting to their feedback, and finally building out the product.
                            In the end we were able to meet our deadlines and successfully build out a search microservice capable of providing real-time search results of over 150 million documents combined with an improved search user interface that allowed customers to conduct advanced search queries of their documents using Optical Character Recognition (generated using Machine Learning powered by Tesseract), identifiers unique to the automotive industry, as well as common search terms such as date ranges, keywords, and parent folder/cabinet names.
                            After fifteen months at Scan123, I decided it was time for a change, and on February 1st, 2021 sent in my resignation letter.
                            <br /><br />
                            Following my resignation from Scan123, I spent the next five months just focusing on family life, experimenting with new languages and tools, and
                            building little things, most notably a note taking application in order to help me keep track of things. On July 7th, 2021 I accepted a full-time position
                            as a Senior Full Stack Software Developer at Jaguar Land Rover and continue to be an integral part of the early development of
                            one of their flagship vehicle infotainment applications.
                        </div>
                    </div>
                    <div className="page-paragraph__wrap">
                        <div className="page-paragraph__header">Current Activity</div>
                        <div className="page__paragraph">
                            I am currently open to considering full time positions in (or around) the Portland area. I am continuing to work with Jaguar Land Rover, but have notified them
                            of my decision to consider other opportunities. If you are interested in hiring me please use my <NavLink to="/contact" className="cards-header__link">Contact Page</NavLink>. Thank You for your time!
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Bio;
