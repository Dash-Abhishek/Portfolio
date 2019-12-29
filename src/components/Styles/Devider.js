import styles from 'styled-components';

const Devider = styles.div`
width:1px;
height:30vh;
background: ${(props) => props.theme.ternarycolor};
align-self: center;


@media (max-width: 768px) {
display:none;
}
`

export default Devider;

