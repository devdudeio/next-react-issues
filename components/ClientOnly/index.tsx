import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {FunctionComponent} from 'react';

const ClientOnly: FunctionComponent = ({ children, ...delegated }): JSX.Element | null => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;

    return <div {...delegated}>{children}</div>;
}


ClientOnly.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ClientOnly;