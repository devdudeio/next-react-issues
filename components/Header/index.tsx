import PropTypes from "prop-types";
import {FunctionComponent} from 'react';

const Header: FunctionComponent = ({children}): JSX.Element =>
    <header className="sticky top-0 bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
            <div className="relative h-16 flex justify-between">
                {children}
            </div>
        </div>
    </header>

Header.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Header;
