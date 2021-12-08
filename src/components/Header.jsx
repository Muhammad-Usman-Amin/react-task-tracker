import PropTypes from 'prop-types';
import Button from './Buttton';

const Header = ({ title, onAdd, isShown}) => {

    return ( 
        <header className = 'header'>
            <h1>{title}</h1>
            <Button  
            color = {isShown ? 'Red' : 'Green'} 
            text = {isShown ? 'Close' : 'Add'} 
            onClick = {onAdd}/>
        </header>
     );
}

Header.defaultProps = {
    title: 'Tasker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func
}

//CSS in JSX
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }
 
export default Header;