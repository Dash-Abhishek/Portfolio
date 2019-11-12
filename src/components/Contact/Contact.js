import React from 'react'
import styles from 'styled-components';

const Heading = styles.h3`
color: ${(props) => props.theme.primarycolor}
`


const Contact = () =>{

    return(
        
        <Heading>Contact US</Heading>
    
    )

}

export default Contact;