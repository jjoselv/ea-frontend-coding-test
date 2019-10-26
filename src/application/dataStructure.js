export const dataStructure = {
    'feature': {
        parent: null,
        childrenType: 'context',
    },
    'context': {
        parent: 'feature',
        childrenType: 'event',
    },
    'event': {
        parent: 'context',
        childrenType: 'sentence',
    },
    'sentence': {
        parent: 'event',
        childrenType: null,
    }
};