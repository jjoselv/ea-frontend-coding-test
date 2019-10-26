/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState, useEffect } from 'react';

const hasLeaves = (leaves) => {
    return leaves && Array.isArray(leaves) && !!leaves.length;
}

const renderExpanderArea = (expanded, setExpanded) => {
    return (
        <i
            className={`fas fa-angle-${expanded ? 'down' : 'right'} fa-2x`}
            role="button"
            tabIndex='0'
            aria-expanded={expanded}
            aria-label={expanded ? 'Collapse' : 'Expand'}
            onClick={(ev) => {
                ev.stopPropagation();
                setExpanded && setExpanded(!expanded);
            }}
            onKeyDown={(ev) => {
                ev.stopPropagation();
                console.log(ev.key);
                [
                    ' ',
                    'Enter',
                    expanded ? 'ArrowUp' : 'ArrowDown',
                    expanded ? 'ArrowLeft' : 'ArrowRight',
                ].includes(ev.key) && setExpanded && setExpanded(!expanded);
            }}
            css={{
                cursor: 'pointer',
                position: 'relative',
            }}
        >
        </i>
    );
};

const renderRemove = (node, onRemove) => {
    return (
        <i
            className="fas fa-trash-alt"
            tabIndex="0"
            role="button"
            aria-label="Remove"
            onClick={(ev) => {
                ev.stopPropagation();
                onRemove && onRemove(node);
            }}
            onKeyDown={(ev) => {
                ev.stopPropagation();
                [' ', 'Enter'].includes(ev.key) && onRemove && onRemove(node);
            }}
            css={{
                padding: '2px',
                cursor: 'pointer'
            }}
        >
        </i>
    )
};

const renderBody = (node, onNodeSelection, index) => {
    return (
        <span
            tabIndex="0"
            role="link"
            aria-label={node.name}
            css={{
                cursor: 'pointer',
                padding: '2px'
            }}
            onKeyDown={(ev) => {
                ev.stopPropagation();
                [' ', 'Enter'].includes(ev.key) && onNodeSelection && onNodeSelection(node);
            }}
            onClick={(ev) => {
                ev.stopPropagation();
                onNodeSelection && onNodeSelection(node);
            }}
        >
            {node.name}
            <span
                css={{
                    paddingLeft: '4px',
                    fontWeight: 'lighter',
                    fontStyle: 'italic'
                }}
            >
                {index}
            </span>
        </span>
    );
};

const renderAddButton = (node, onAdd) => {
    return (
        <i
            tabIndex='0'
            role="button"
            aria-label={'Add Node'}
            css={{
                cursor: 'pointer'
            }}
            className="fas fa-plus-circle"
            onClick={(ev) => {
                ev.stopPropagation();
                onAdd && onAdd(node)
            }}
            onKeyDown={(ev) => {
                ev.stopPropagation();
                if ([' ', 'Enter'].includes(ev.key)) {
                    onAdd && onAdd(node)
                }
            }}
        >
        </i>
    );
};

const TreeNode = ({
    node,
    node: { id, children: leaves },
    canRemove,
    canGrow,
    onRemove,
    onAdd,
    onNodeSelection,
    expandAll,
    index,
    children,
}) => {
    const [expanded, setExpanded] = useState(expandAll || false);

    useEffect(() => {
        setExpanded(expandAll)
    }, [expandAll]);

    return (
        <div
            id={id}
        >
            <div
                name="item"
                css={{
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'background-color linear 0.2s',
                    ':hover': {
                        'backgroundColor': 'rgba(255,127,80,0.4)'
                    },
                    paddingLeft: '20px'
                }}
            >
                {hasLeaves(leaves) && renderExpanderArea(expanded, setExpanded)}
                {renderBody(node, onNodeSelection, index)}
                {canRemove && renderRemove(node, onRemove)}
                {canGrow && renderAddButton(node, onAdd)}
            </div>
            {
                expanded && (
                    <div
                        css={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                        name="children"
                    >
                        {children}
                    </div>
                )
            }
        </div>
    );
};

export default TreeNode;