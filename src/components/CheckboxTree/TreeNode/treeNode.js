import React from 'react';
import { FaCheckSquare, FaMinusSquare } from 'react-icons/fa';
import last from 'lodash/last';
import PropTypes from 'prop-types';
import { StyledTreeNode } from '../styled';
import './styles.scss';

const getNodeLabel = (node) => last(node.path.split('/'));

const TreeNode = (props) => {
  const { node, getChildNodes, level, onToggle } = props;
  return node ? (
    <React.Fragment>
      <StyledTreeNode level={level}>
        <label className="checkbox-container">
          <input type="checkbox" checked={node?.selectedStatus === 'checked'} className={(node?.selectedStatus === 'checked' || node?.selectedStatus === 'partial') ? 'hide-checkbox' : 'show-checkbox'} onChange={(e) => onToggle(node)} />
          <span>
            {node.selectedStatus === 'checked' && <span className="checkmark"><FaCheckSquare color="rgb(33 105 33)"/></span>}
            {node.selectedStatus === 'partial' && <span className="checkmark"><FaMinusSquare color="rgb(53 14 14)"/></span>}
            {getNodeLabel(node)}
          </span>
        </label>
      </StyledTreeNode>

      { getChildNodes(node).map(childNode => (
        <TreeNode
          {...props}
          node={childNode}
          level={level + 1}
          key={childNode?.path}
        />
      ))}
    </React.Fragment>
  ) : <div>Nothing</div>;
}

TreeNode.propTypes = {
  node: PropTypes.object.isRequired,
  getChildNodes: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired,
  onNodeSelect: PropTypes.func.isRequired,
};

TreeNode.defaultProps = {
  level: 0,
};

export default TreeNode;
