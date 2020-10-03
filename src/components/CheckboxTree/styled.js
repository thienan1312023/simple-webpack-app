import styled from 'styled-components';

const getPaddingLeft = (level) => {
  let paddingLeft = level * 30;
  return paddingLeft;
}


export const StyledTreeNode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  padding-left: ${props => getPaddingLeft(props.level)}px;
  cursor: pointer;
`;

export const StyledCheckboxTree = styled.div`
  background-color:  rgb(108 179 218);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const TreeWrapper = styled.div`
  padding: 20px;
`;