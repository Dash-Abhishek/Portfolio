import React from 'react';
import styles from 'styled-components';
import Canvas from '../Styles/Canvas'


const SubHeading = styles.div`
font-size: 20px;
color :${(props)=>props.theme.secondarycolor};
`

const LanguageSection = styles.div`
display:flex;
justify-content:left;
background:aliceblue;
min-width:20px;
min-height:10px;
align-items:flex-start;
`



const Skills =()=>{

    return(
        <Canvas>
            <SubHeading>Languages</SubHeading>
            
        </Canvas>

    )

}

export default Skills;