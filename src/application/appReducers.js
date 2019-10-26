import arrayToTree from 'array-to-tree';

const flattenObject = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    return [
      ...acc,
      ...obj[key],
    ]
  }, []);
};

const buildTree = (job) => {
  return arrayToTree(flattenObject(job), {
    parentProperty: 'parentId',
    customID: 'id',
  })
};

const mockJob = {
  features: [
    {
      id: 'feature-1',
      type: 'feature',
      name: 'feature-a',
      parentId: 'job-1',
    }, {
      id: 'feature-2',
      type: 'feature',
      name: 'feature-b',
      parentId: 'job-1',
    },
  ],
  contexts: [
    {
      id: 'context-1',
      name: 'context-a',
      type: 'context',
      parentId: 'feature-1',
    }, {
      id: 'context-1a',
      name: 'context-ad',
      type: 'context',
      parentId: 'feature-1',
    }, {
      id: 'context-2',
      name: 'context-b',
      type: 'context',
      parentId: 'feature-2',
    },
  ],
  events: [
    {
      id: 'event-1',
      name: 'event-a',
      type: 'event',
      parentId: 'context-1',
    }, {
      id: 'event-1a',
      name: 'event-ad',
      type: 'event',
      parentId: 'context-1a',
    }, {
      id: 'event-2',
      name: 'event-b',
      type: 'event',
      parentId: 'context-2',
    }, {
      id: 'event-3',
      name: 'event-c',
      type: 'event',
      parentId: 'context-2',
    },
  ],
  sentences: [
    {
      id: 'sencence-1',
      name: 'sentence-a',
      type: 'sentence',
      parentId: 'event-1'
    }, {
      id: 'sencence-1a',
      name: 'sentence-ad',
      type: 'sentence',
      parentId: 'event-1a'
    }, {
      id: 'sencence-2',
      name: 'sentence-2',
      type: 'sentence',
      parentId: 'event-2',
    }, {
      id: 'sencence-3',
      name: 'sentence-3',
      type: 'sentence',
      parentId: 'event-2',
    }
  ],
};

// const mockJob = {};

const intialState = {
  jobs: [],
  // selectedJob: [{
  //   id: 'feature-1',
  //   type: 'feature',
  //   name: 'feature-a',
  //   parentType: 'job',
  //   parentId: 'job-1',
  //   children: [{
  //     id: 'context-1',
  //     name: 'context-a',
  //     type: 'context',
  //     parentType: 'feature',
  //     parentId: 'feature-1',
  //     children: [{
  //       id: 'event-1',
  //       name: 'event-a',
  //       type: 'event',
  //       parentType: 'context',
  //       parentId: 'context-1',
  //       children: [{
  //         id: 'sencence-1',
  //         name: 'sentence-a',
  //         type: 'sentence',
  //         parentType: 'event',
  //         parentId: 'event-1'
  //       }]
  //     }],
  //   }, {
  //     id: 'context-1a',
  //     name: 'context-ad',
  //     type: 'context',
  //     parentType: 'feature',
  //     parentId: 'feature-1',
  //     children: [{
  //       id: 'event-1a',
  //       name: 'event-ad',
  //       type: 'event',
  //       parentType: 'context',
  //       parentId: 'context-1a',
  //       children: [{
  //         id: 'sencence-1a',
  //         name: 'sentence-ad',
  //         type: 'sentence',
  //         parentType: 'event',
  //         parentId: 'event-1a'
  //       }]
  //     }],
  //   }]
  // }, {
  //   id: 'feature-2',
  //   type: 'feature',
  //   name: 'feature-b',
  //   parentType: 'job',
  //   parentId: 'job-1',
  //   children: [{
  //     id: 'context-2',
  //     name: 'context-b',
  //     type: 'context',
  //     parentType: 'feature',
  //     parentId: 'feature-2',
  //     children: [{
  //       id: 'event-2',
  //       name: 'event-b',
  //       type: 'event',
  //       parentType: 'context',
  //       parentId: 'context-2',
  //       children: [{
  //         id: 'sencence-2',
  //         name: 'sentence-2',
  //         type: 'sentence',
  //         parentType: 'event',
  //         parentId: 'event-2',
  //       }, {
  //         id: 'sencence-3',
  //         name: 'sentence-3',
  //         type: 'sentence',
  //         parentType: 'event',
  //         parentId: 'event-2',
  //       }]
  //     }],
  //   }]
  // }],
  selectedJob: mockJob,
  jobTree: buildTree(mockJob),
  detail: {},
};

const addSentenceToJob = (job = {}, sentence = {}) => {
  const newJob = {
    ...job,
    sentences: [
      ...job.sentences,
      {
        ...sentence,
        id: sentence.name + (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase(), // Unique Id
      }
    ],
  };
  return newJob;
};

const removeSentenceFromJob = (job = {}, sentence = {}) => {
  const { id: sentenceId } = sentence;
  const newJob = {
    ...job,
    sentences: [
      ...job.sentences.filter(({ id: _id }) => sentenceId !== _id),
    ]
  };
  return newJob;
};


const appReducers = (state = intialState, action) => {
  switch (action.type) {
    case 'ADD_NODE':
      let selectedJob1 = addSentenceToJob(state.selectedJob, action.node)
      return {
        ...state,
        selectedJob: selectedJob1,
        jobTree: buildTree(selectedJob1),
      };
    case 'REMOVE_NODE':
      let selectedJob2 = removeSentenceFromJob(state.selectedJob, action.node)
      return {
        ...state,
        selectedJob: selectedJob2,
        jobTree: buildTree(selectedJob2),
        detail: state.detail.id === action.node.id ? {} : state.detail,
      };
    case 'SELECT_NODE':
      return {
        ...state,
        detail: {
          ...action.node
        },
      };
    default:
      return state;
  }
}

export default appReducers