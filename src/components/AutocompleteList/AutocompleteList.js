import React from 'react';
import PropTypes from 'prop-types';
import AutocompleteItem from '../AutocompleteItem';

const AutocompeteList = ({ items, ...props }) =>
  items.map(id => <AutocompleteItem id={id} key={id} {...props} />);

AutocompeteList.propTypes = {
  items: PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default AutocompeteList;
