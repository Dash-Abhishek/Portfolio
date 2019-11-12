import React from 'react';
import styles from 'styled-components';


const Heading = styles.h3`
color : ${(props)=>props.theme.primarycolor}
`


const Projects = ()=>{

    return(
        <Heading>Projects</Heading>

    )

}

export default Projects;