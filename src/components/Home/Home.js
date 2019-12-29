import React from 'react';
import styles from 'styled-components';
import Canvas from '../Styles/Canvas';
import Devider from '../Styles/Devider';
import fullstacklogo from '../../assets/fullstack_banner.png';



const PosterSection = styles.div`
flex:1;
display: flex;
flex-direction: column;
background: ${(props) => props.theme.pannelcolor};
align-items: center;    
justify-content: space-around;
min-width:200px;
min-height:200px;
margin:50px;
margin-botom:0px;
`

const BioSection = styles.div`
flex:2;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
// background:#242f40;
margin :50px;
font-size: 20px;
color : ${(props) => props.theme.secondarycolor};
`
const Button = styles.button`
font-size:20px;
align-self:flex-start;
margin-top:20px
border-radius: 5px;
height: 40px;
background: ${(props) => props.theme.ternarycolor};
border-color: ${(props) => props.theme.ternarycolor};
color: white;
`


const Fullstack_banner = styles.img.attrs({
    src:fullstacklogo
})`

`


const Home = () => {

    return (
        <Canvas>
            <PosterSection>
                {/* <Fullstack_banner></Fullstack_banner> */}
            {/* <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="abhishek-dash-232937106"><a class="LI-simple-link" href='https://in.linkedin.com/in/abhishek-dash-232937106?trk=profile-badge'></a></div> */}
            {/* <img src ="/public/profilepic.jpg"/> */}
            </PosterSection>

            <Devider />

            <BioSection>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            <Button onClick={event=>{console.log("Download button clicked")}} href="https://101personaldocs.s3.amazonaws.com/Abhishek's+Resume.pdf" download>Download</Button>
            </BioSection>

        </Canvas>

    )

}

export default Home;