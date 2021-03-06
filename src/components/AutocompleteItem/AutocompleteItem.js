import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Item = styled('div')`
  padding: 10px 12px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  word-wrap: break-word;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

const AutocompleteItem = ({ name, onClick }) => (
  <Item id={name} onClick={onClick}>
    {name}
  </Item>
);

AutocompleteItem.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AutocompleteItem;
