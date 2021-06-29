import PropTypes from "prop-types";
import {FunctionComponent} from 'react';

const AuthorTitle: FunctionComponent = ({children}): JSX.Element =>

    <p className="flex items-center text-sm text-gray-500">
        {children}
    </p>

AuthorTitle.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthorTitle;