import React from 'react';
import styles from 'styled-components';
import Canvas from '../Styles/Canvas'
import Bar from '../Styles/Bar'
import Devider from '../Styles/Devider';
import Tiles from '../Styles/Tiles';
import fullstacklogo from '../../assets/fullstack_banner.png';


const SubHeading = styles.div`
font-size: 30px;
color :${(props) => props.theme.ternarycolor};
margin-top:10px;
`

const Body = styles.div`
font-size: 20px;
color :${(props) => props.theme.secondarycolor};
`

const SkillSections = styles.div`

display:flex;
flex-direction: column;
flex:1;
margin:50px;
// background: ${(props) => props.theme.pannelcolor}
min-width:200px;
`

const Pannel = styles.div`
display:flex;
flex:1;
flex-direction: column;
// background:aliceblue;
margin:15px
`

const RatingBar = styles.div`
display:flex;
flex:1;

`

const KeySkills = styles.div`
display : flex;
flex-flow: wrap;
color: ${(props) => props.theme.secondarycolor};
 
`

const Services = styles.div`
align-items:ceter;
color: ${(props) => props.theme.secondarycolor};
 
`
const Fullstack_banner = styles.img.attrs({
    src:fullstacklogo
})`

`


const Skills = () => {

    return (
        <Canvas>

            <SkillSections>

                <SubHeading>Languages</SubHeading>
                <Pannel>
                    <Body>Node.js</Body>
                    <RatingBar><Bar /><Bar /><Bar /><Bar /></RatingBar>
                </Pannel>
                <Pannel>
                    <Body>Java</Body>
                    <RatingBar><Bar /><Bar /><Bar /><Bar /></RatingBar>
                </Pannel>
                <Pannel>
                    <Body>Python</Body>
                    <RatingBar><Bar /><Bar /></RatingBar>
                </Pannel>
                <Pannel>
                    <Body>Html & CSS</Body>
                    <RatingBar><Bar /><Bar /></RatingBar>
                </Pannel>

                <SubHeading>Frame Works</SubHeading>
                <Pannel>
                    <Body>Spring Boot</Body>
                    <RatingBar><Bar /><Bar /><Bar /><Bar /></RatingBar>
                </Pannel>
                <Pannel>
                    <Body>Express.Js</Body>
                    <RatingBar><Bar /><Bar /><Bar /><Bar /></RatingBar>
                </Pannel>
                <Pannel>
                    <Body>React.Js</Body>
                    <RatingBar><Bar /><Bar /><Bar /></RatingBar>
                </Pannel>
                

            </SkillSections>

            <Devider/>
            
            <SkillSections >

                <SubHeading>Certifications</SubHeading>
                <Pannel>
                    <Body>AWS Certified Solutions Architect - Associate</Body>
                    <br></br>
                    <Body>Jan 05, 2019 - Jan 05, 2022</Body>
                </Pannel>


                <SubHeading>Service Offerings</SubHeading>
                <Pannel>
                    <KeySkills>
                        <Tiles>Web development</Tiles><Tiles>Chat bots</Tiles>
                        <Tiles>Cloud native app development</Tiles>
                    </KeySkills>
                </Pannel>
                

                <SubHeading>Key skills</SubHeading>
                <Pannel>
                    <KeySkills>
                        <Tiles>Microservices</Tiles><Tiles>REST</Tiles>
                        <Tiles>AWS</Tiles><Tiles>GCP</Tiles>
                        <Tiles>Docker</Tiles><Tiles>Kubernetes</Tiles>
                        <Tiles>CICD</Tiles><Tiles>Git/BitBucket</Tiles>
                        <Tiles>Spinnaker</Tiles><Tiles>Jenkins</Tiles>
                    </KeySkills>
                </Pannel>

                
            </SkillSections>
            
            
        </Canvas>

    )

}

export default Skills;