/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState } from 'react';
import TreeNode from '../TreeNode/TreeNode';

const hasChildren = (el) => {
    return 'children' in el && Array.isArray(el.children) && !!el.children.length;
};

const renderTree = ({
    data,
    onSelect,
    onAdd,
    onRemove,
    canGrow = [],
    canRemove = [],
}, expandAll, prevIndex = null) => {
    return data.map((node, index) => {
        const indx = `${!prevIndex ? '' : prevIndex}${index + 1}`;
        return (
            <TreeNode
                key={node.id}
                canGrow={canGrow.includes(node.type)}
                canRemove={canRemove.includes(node.type)}
                onNodeSelection={onSelect}
                onRemove={onRemove}
                onAdd={onAdd}
                node={node}
                index={indx}
                expandAll={expandAll}
            >
                <div
                    css={{
                        marginLeft: '20px',
                    }}
                >
                    {hasChildren(node) && renderTree({
                        data: node.children,
                        onSelect,
                        onAdd,
                        onRemove,
                        canGrow,
                        canRemove,
                    }, expandAll, indx + '.')}
                </div>
            </TreeNode>
        );
    });
};

const css = {
    display: 'flex',
    padding: '10px',
    flexDirection: 'column',
    flex: 1,
};

const SpeechTree = (props) => {
    const [expandAll, setExpandAll] = useState(false);
    if (!props.data || !Array.isArray(props.data) || !props.data.length) {
        return (
            <div
                css={{
                    ...css,
                    justifyContent: 'center',
                }}
            >
                <span
                    css={{
                        alignSelf: 'center'
                    }}
                >
                    The CMS has no data
                </span>
            </div>
        )
    } else {
        return (
            <div
                css={css}
            >
                <label>
                    <input
                        type="checkbox"
                        name="expand-all"
                        value={expandAll}
                        checked={expandAll}
                        onChange={() => {
                            setExpandAll(!expandAll);
                        }}
                    />
                    Expand All
                </label>
                {renderTree(props, expandAll)}
            </div>
        );
    }
};

export default SpeechTree;