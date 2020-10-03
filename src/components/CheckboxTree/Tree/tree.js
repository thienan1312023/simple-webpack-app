import React, { Component } from 'react';
import values from 'lodash/values';
import PropTypes from 'prop-types';
import TreeNode from '../TreeNode/treeNode';
import { flatData } from '../constants';

export default class Tree extends Component {
  state = {
    nodes: flatData,
  };

  getRootNodes = () => {
    const { nodes } = this.state;
    return values(nodes).filter(node => node.isRoot === true);
  }

  getChildNodes = (node) => {
    const { nodes } = this.state;
    if (!node.children) return [];
    if (node.selectedStatus === 'checked') {
      return node.children.map(path => {
        nodes[path].selectedStatus = 'checked'
        return { ...nodes[path] };
      })
    }

    if (node.selectedStatus === 'unCheck') {
      return node.children.map(path => {
        nodes[path].selectedStatus = 'unCheck'
        return { ...nodes[path] };
      })
    }

    if (node.selectedStatus !== 'checked' && node.selectedStatus !== 'unCheck') {
      return node.children.map(path => nodes[path])
    }
    this.setState({ nodes });
  }
  getParents = (node) => {
    const { nodes } = this.state;
    let nodePath = node.path;
    while (nodePath && nodePath !== '') {
      let n = nodePath.lastIndexOf('/');
      nodePath = nodePath.substring(0, n)
      if (nodePath) {
        const isEveryChildrenChekced = nodes[nodePath].children.every((element) => nodes[element].selectedStatus === 'checked');
        const isSomeChildrenChekced = nodes[nodePath].children.some((element) => nodes[element].selectedStatus === 'checked');
        const isSomeChildrenPartial = nodes[nodePath].children.some((element) => nodes[element].selectedStatus === 'partial');
        if (node.selectedStatus === 'checked' && isEveryChildrenChekced) {
          nodes[nodePath].selectedStatus = 'checked'
        }
        if (node.selectedStatus === 'checked' && !isEveryChildrenChekced) {
          nodes[nodePath].selectedStatus = 'partial'
        }
        if (node.selectedStatus !== 'checked' && isSomeChildrenChekced) {
          nodes[nodePath].selectedStatus = 'partial';
        }
        if (node.selectedStatus !== 'checked' && !isSomeChildrenChekced && !isEveryChildrenChekced) {
          nodes[nodePath].selectedStatus = '';
        }
        if (isSomeChildrenPartial) {
          nodes[nodePath].selectedStatus = 'partial';
        }
      }
    }
    this.setState({ nodes })
  }
  onToggle = (node) => {
    const { nodes } = this.state;
    if (node.selectedStatus === 'checked')
      nodes[node.path].selectedStatus = 'unCheck';
    else if (node.selectedStatus === 'unCheck')
      nodes[node.path].selectedStatus = 'checked'

    if (!node.selectedStatus)
      nodes[node.path].selectedStatus = 'checked'

    this.getParents(nodes[node.path]);
  }

  onNodeSelect = node => {
    const { onSelect } = this.props;
    onSelect(node);
  }

  render() {
    const rootNodes = this.getRootNodes();
    return (
      <div>
        { rootNodes.map(node => (
          <TreeNode
            node={node}
            getChildNodes={this.getChildNodes}
            onToggle={this.onToggle}
            onNodeSelect={this.onNodeSelect}
            key={node.path}
          />
        ))}
      </div>
    )
  }
}

Tree.propTypes = {
  onSelect: PropTypes.func.isRequired,
};