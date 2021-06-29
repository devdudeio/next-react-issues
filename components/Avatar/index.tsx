import PropTypes from "prop-types";
import {FunctionComponent} from 'react';

type Avatar = {
    src: string;
    alt: string;
}

const Avatar: FunctionComponent<Avatar> = ({src, alt, ...props}): JSX.Element =>
    <img className="inline-block h-6 w-6 rounded-full" src={src} alt={alt} {...props}/>

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Avatar;