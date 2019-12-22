import React from 'react';
import styles from 'styled-components';
import Canvas from '../Styles/Canvas'
import Bar from '../Styles/Bar'
import Devider from '../Styles/Devider';
import Tiles from '../Styles/Tiles';


const SubHeading = styles.div`
font-size: 25px;
color :${(props) => props.theme.ternarycolor};
margin-top:10px;
`

const Body = styles.div`
font-size: 15px;
color :${(props) => props.theme.secondarycolor};
`

const SkillSections = styles.div`
display:flex;
flex-direction: column;
flex:1;

margin:50px;
// background: ${(props) => props.theme.pannelcolor}
width:200px;
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
                <Pannel>
                    <Body>------</Body>
                    <RatingBar><Bar /><Bar /><Bar /></RatingBar>
                </Pannel>

            </SkillSections>
            <Devider />


            <SkillSections >

                <SubHeading>Certifications</SubHeading>
                <Pannel>
                    <Body>AWS Certified Solutions Architect - Associate</Body>
                    <Body>Jan 05, 2019 - Jan 05, 2022</Body>
                </Pannel>
                <SubHeading>Subheading</SubHeading>
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
            <Devider />
            <SkillSections >
                
            </SkillSections>

        </Canvas>

    )

}

export default Skills;