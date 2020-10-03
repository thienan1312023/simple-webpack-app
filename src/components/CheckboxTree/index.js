import React, { Component } from 'react';
import Tree from './Tree/tree';
import {StyledCheckboxTree, TreeWrapper} from "./styled";
export default class CheckboxTree extends Component { 
  state = {
    selectedFile: null,
  };

  onSelect = (file) => this.setState({ selectedFile: file });

  render() {
    const { selectedFile } = this.state;

    return (
      <StyledCheckboxTree>
        <TreeWrapper>
          <Tree onSelect={this.onSelect} />
        </TreeWrapper>
        <div>
          { selectedFile && selectedFile.type === 'file' && selectedFile.content }
        </div>
      </StyledCheckboxTree>
    )
  }
}