import Head from "next/head";
import PropTypes from "prop-types";
import {FunctionComponent} from 'react';

const HeadTitle: FunctionComponent = ({children}): JSX.Element =>
    <Head>
        <title>{children}</title>
    </Head>

HeadTitle.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeadTitle;