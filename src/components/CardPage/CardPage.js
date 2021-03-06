import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import CardWrapper from '../CardWrapper';

const CardPage = ({
  title, body, user, number,
}) => (
  <CardWrapper full>
    <Text big>
        #{number} <a href={user.html_url}>{user.login}</a>
    </Text>
    <Text big>{title}</Text>
    <Text>{body}</Text>
  </CardWrapper>
);

CardPage.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
};

export default CardPage;
