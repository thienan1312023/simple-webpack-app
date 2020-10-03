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
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;  
  border-radius: 10px;
  background-color: #b1d2ea;
  padding: 20px;
`;

export const TreeWrapper = styled.div`
  width: 250px;
`;