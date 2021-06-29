import PropTypes from 'prop-types';
import {FunctionComponent} from 'react';


const AppTitle: FunctionComponent = ({children, ...props}): JSX.Element =>
    <h1 className="text-white text3xl font-extrabold" {...props}>{children}</h1>

AppTitle.propTypes = {
    children: PropTypes.node.isRequired,
};

AppTitle.defaultProps = {
    children: "missing children"
}

export default AppTitle;