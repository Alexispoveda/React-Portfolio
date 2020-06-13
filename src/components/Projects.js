import React, { useState } from 'react'
import { Tabs, Tab } from 'react-mdl'

import Project from './Project'


const Projects = () => {

    const [TabState, setTabState] = useState({
        activeTab: 0
    })

    const toggleCategories = () => {
        console.log(TabState)
        let projects

        switch (TabState.activeTab) {
            case 0:
                projects = [
                    (<Project
                        cardTitle="The Fields"
                        tech="react"
                        description="Bulls & Cows adaptation in React"
                        github=""
                        demo="https://thefields.web.app"
                    />),

                    (<Project
                        cardTitle="React Portfolio"
                        tech="react"
                        description="Portfolio with React JS"
                        github="https://github.com/Alexispoveda/React-Portfolio"
                        demo="https://alexispoveda.com"
                    />),

                    (<Project
                        cardTitle="Swaping Names"
                        tech="react"
                        description="Alternative Names"
                        github="https://github.com/Alexispoveda/SwapingNames"
                        demo="https://swapingnames.web.app"
                    />),

                    (<Project
                        cardTitle="Rainbow FANLYC"
                        tech="react"
                        description="Rainbow for FANLYC Instagram donations"
                        github="https://github.com/Alexispoveda/rainbow-fanlyc"
                        demo="https://rainbow-fanlyc.web.app/"
                    />),

                    (<Project
                        cardTitle="React Hamburger"
                        tech="react"
                        description="Hamburger builder for Udemy course"
                        github="https://github.com/Alexispoveda/react-burger"
                        demo="https://react-my-burger-5b4a0.web.app/"
                    />)
                ]
                break;

            case 1:
                projects = (
                    <Project
                        cardTitle="Biblia API"
                        tech="express"
                        description="API with Express JS"
                        github="https://github.com/Alexispoveda/BibliAPI"
                        demo="https://bibliapi-rafa.herokuapp.com/#/"
                    />
                )
                break;
            default: console.log("Ninguno")
        }

        return (<div className="ProjectsContent">
            {projects}
        </div>
        )
    }


    return (
        <div className="Projects" id="projects">
            <Tabs activeTab={TabState.activeTab} onChange={tabdId => setTabState({ activeTab: tabdId })} ripple className="ProjectTab">
                <Tab>React</Tab>
                <Tab>Express</Tab>
            </Tabs>

            {toggleCategories()}

        </div>
    )
}

export default Projects;