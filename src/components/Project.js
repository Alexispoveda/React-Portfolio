import React from 'react'
import {Card,CardTitle,CardActions,Button,CardText} from 'react-mdl'

const Project = props =>{

    const images = {
        'react':'https://storage.googleapis.com/alexis-web-portfolio-bucket/react.jpeg',
        'express': 'https://storage.googleapis.com/alexis-web-portfolio-bucket/express.jpeg'
    }
    
    const CardTitleStyle = {
        'color':'#fff',
        'height':'175px',
        'background':'url('+images[props.tech]+ ') center / cover'
    }
    const CardActionStyle ={
        'display':'flex',
        'justifyContent':'space-evenly'
    }

    return(
        <Card shadow={5} className="Project">
                <CardTitle style={CardTitleStyle}> 
                    {props.cardTitle}
                </CardTitle>
                <CardText>
                    {props.description}
                </CardText>
                <CardActions style={CardActionStyle} border>
                    <Button colored href={props.github} target="_blank">GitHub</Button>
                    <Button colored href={props.demo} target="_blank">Demo</Button>
                </CardActions>
        </Card>
    )
}

export default Project