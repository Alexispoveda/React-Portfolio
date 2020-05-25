import React, { useState } from 'react'
import { Tabs, Tab} from 'react-mdl'

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
                        cardTitle="React Portfolio" 
                        tech="react" 
                        description="Portfolio with React JS"
                        />),

                        (<Project  
                        cardTitle="Rainbow FANLYC" 
                        tech="react" 
                        description="Rainbow for FANLYC Instagram donations"
                        github="https://github.com/Alexispoveda/rainbow-fanlyc"
                        demo="https://rainbow-fanlyc.web.app/"
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
                <Tab>MySQL</Tab>
                <Tab>Java</Tab>
            </Tabs>

                {toggleCategories()}

        </div>
    )
}

export default Projects;