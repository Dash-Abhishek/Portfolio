import React, { useState } from 'react';
import styles from 'styled-components'

const Canvas = styles.div`
margin-top:100px
display: flex;
flex:1;
align-items: center;
justify-content: center;
`

const Title = styles.h2`

`

const SubTitle = styles.h4`

`


const Pannel = styles.div`

display: flex;
align-items: center;
flex-direction:column;
padding: 5px;
justify-content: center;
width: 400px;
height: 500px;
background:#f0f8ff85;
border-radius: 15px;
`

const UserNameField = styles.input.attrs({
    placeholder: "username"
})`
margin:15px;
height:30px;
width:250px;
padding: 5px;
background: #fff;
border: 1px solid rgba(0, 0, 0, 0.1);
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
border-radius:5px;

`



const PasswordField = styles.input.attrs({
    type:"password",
    placeholder: "password"
})`

margin:15px;
height:30px;
width:250px;
padding: 5px;
background: #fff;
border: 1px solid rgba(0, 0, 0, 0.1);
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
border-radius:5px;
`

const LoginButton = styles.button.attrs({
    type:"submit"
})`
font-size:20px;
width:100px;
margin-top:20px
border-radius: 5px;
height: 40px;
background: ${(props) => props.theme.ternarycolor};
border-color: ${(props) => props.theme.ternarycolor};
color: white;
`


const LoginPage = () => {



    const [userName, setUserName] = useState("");
    const [password, setpassword] = useState("")


    function LoginButtonHandler(event){

        console.log("login button clicked",event.target);

        event.preventDefault();

    }




    return(
        
        <Canvas>
            <form>
            <Pannel>
                <Title>Login</Title>
                <UserNameField  />
                <PasswordField/>
                <LoginButton onClick={LoginButtonHandler}>Login</LoginButton>                
            </Pannel>
            </form>
        </Canvas>

    )


}


export default LoginPage;