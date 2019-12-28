
import styles from 'styled-components';

const Canvas =  styles.div`

display: flex;
min-height: 80vh;
background: #1a1a1f38;
flex-wrap:wrap;
justify-content: center;
margin: 10px 50px 10px 50px;

@media (max-width: 768px) {
    flex-flow:wrap;
    
  }
`

export default Canvas;