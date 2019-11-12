import React from 'react';
import styles from 'styled-components';
import Canvas from '../Styles/Canvas'



const PosterSection = styles.div`
flex:1;
display: flex;
flex-direction: column;
background:#242f40;
align-items: center;    
justify-content: space-around;
width:auto;
height:auto;
margin:50px;
margin-botom:0px;
`



const Devider = styles.div`
width:1px;
height:30vh;
background: ${(props)=>props.theme.ternarycolor};
align-self: center;
`



const BioSection = styles.div`
flex:2;
display:flex;
justify-content:center;
align-items:center;
// background:#242f40;
margin :50px;
font-size: 20px;
color : ${(props) => props.theme.secondarycolor}
`



const Home = () => {

    return (
        <Canvas>
            <PosterSection>
                {/* <img src="https://avatars1.githubusercontent.com/u/25668223?s=460&v=4"></img> */}
                
            </PosterSection>

            <Devider/>

            <BioSection>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </BioSection>

        </Canvas>

    )

}

export default Home;