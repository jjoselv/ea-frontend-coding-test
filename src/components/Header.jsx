/** @jsx jsx */
import { jsx } from '@emotion/core'

const Header = () => {
    return (
        <header
            css={{
                padding: '32px',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 4px 2px -2px rgba(255,127,80,0.4)',
                backgroundColor: 'coral',
            }}
        >
            <h1>
                Localization CMS
            </h1>
        </header>
    );
};

export default Header;