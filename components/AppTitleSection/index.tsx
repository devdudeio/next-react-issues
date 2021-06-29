import PropTypes from "prop-types";
import {FunctionComponent} from 'react';

const AppTitleSection: FunctionComponent = ({children}): JSX.Element =>
    <div className="relative z-10 px-2 flex lg:px-0">
        <div className="flex-shrink-0 flex items-center">
            {children}
        </div>
    </div>

AppTitleSection.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppTitleSection