export const selectNode = (node) => {
    return {
        type: 'SELECT_NODE',
        node,
    };
}

export const addNode = (node) => {
    return {
        type: 'ADD_NODE',
        node,
    };
}

export const removeNode = (node) => {
    return {
        type: 'REMOVE_NODE',
        node,
    };
}