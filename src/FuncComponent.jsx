export function FuncComponent(props) {
    return(
        <li style={{
            listStyleType: 'none',
            background: '#3f2f2f',
            color: '#ff9090',
            textAlign: 'center',
            height: '30px'
        }}>
          {props.name}
          
          <span style={{
            color: '#008BFF',
            marginLeft: '24px'
          }}>
            {props.email}
          </span>
        </li>
    );
} 
