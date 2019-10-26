/** @jsx jsx */
import { jsx } from '@emotion/core';

const css = {
    display: 'flex',
    padding: '10px',
    flexDirection: 'column',
    flex: 1,
    boxShadow: '-4px 0 2px -2px rgba(0,0,0,0.4)',
};

const Details = (props) => {
    if (!('id' in props)) {
        return (
            <div
                css={{
                    ...css,
                    justifyContent: 'center',
                }}
            >
                <span
                    css={{
                        alignSelf: 'center',
                    }}
                >
                    Select an entity from the tree.
                </span>
            </div>
        );
    } else {
        return (
            <div
                css={css}
            >
                <div
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingBottom: '10px',
                    }}
                >
                    <span
                        css={{
                            fontWeight: 'bold' 
                        }}
                    >
                        Name
                    </span>
                    {props.name}
                </div>
                <div
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingBottom: '10px',
                    }}
                >
                    <span
                        css={{
                            fontWeight: 'bold' 
                        }}
                    >
                        Type
                    </span>
                    {props.type}
                </div>
                <div
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingBottom: '10px',
                    }}
                >
                    <span
                        css={{
                            fontWeight: 'bold' 
                        }}
                    >
                        Parent ID
                    </span>
                    {props.parentId}
                </div>
            </div>
        );
    }
};

export default Details;