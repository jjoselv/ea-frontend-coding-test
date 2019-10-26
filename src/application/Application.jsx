/** @jsx jsx */
import { jsx } from '@emotion/core'
import Header from '../components/Header';
import SpeechTree from '../components/SpeechTree/SpeechTree';
import Details from '../components/Details/Details';
import { dataStructure } from './dataStructure';

  
const canGrow = ['event'];
const canRemove = ['sentence'];

const addNodeHandler = (addHandler) => (node) => {
    const nodeName = prompt('Insert the name');
    nodeName && addHandler({
        name: nodeName,
        parentId: node.id,
        type: dataStructure[node.type].childrenType,
    });
};

const Application = ({detail, selectNode, selectJob, jobTree, removeHandler, addHandler}) => {
    return (
        <div
            css={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Header
                setSelectedJob={selectJob}
            />
            <div
                id="content"
                css={{
                    display: 'flex',
                    flex: 1,
                    // padding: '10px',
                }}
            >
                <SpeechTree
                    data={jobTree}
                    onSelect={selectNode}
                    canGrow={canGrow}
                    canRemove={canRemove}
                    onRemove={removeHandler}
                    onAdd={addNodeHandler(addHandler)}
                />
                <Details
                    {...detail}
                >

                </Details>
            </div>
        </div>
    );
};

export default Application;