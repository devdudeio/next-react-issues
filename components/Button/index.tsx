import PropTypes from "prop-types";
import {FunctionComponent, MouseEventHandler} from 'react';

type Button = {
    onClick: MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode,
}

const Button: FunctionComponent<Button> = ({onClick, children, ...props}): JSX.Element =>

    <button onClick={onClick} type="button"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            {...props}>
        {children}
    </button>

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
    children: "children missing",
    onClick: () => console.log('onClick missing'),
};

export default Button;