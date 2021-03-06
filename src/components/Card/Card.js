import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Text from '../Text';
import CardWrapper from '../CardWrapper';

const HeadBar = styled('div')`
  font-weight: 300;
  display: flex;
  align-items: center;
`;

const HeadBarItem = styled('div')`
  margin: 5px;
`;

const Card = ({
  number, title, user, created, fieldUserName, fieldRepoName,
}) => (
  <CardWrapper>
    <HeadBar>
      <HeadBarItem>
        <img src={user.avatar_url} alt={user.login} width="35" height="35" />
      </HeadBarItem>
      <HeadBarItem>#{number}</HeadBarItem>
      <HeadBarItem>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          {user.login}
        </a>
      </HeadBarItem>
    </HeadBar>
    <Text big>{title}</Text>
    <Text small>Created {moment(created).format('DD MMMM YYYY')}</Text>
    <Link to={`${fieldUserName}/${fieldRepoName}/issue/${number}`}>more</Link>
  </CardWrapper>
);

Card.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  created_at: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
};

export default Card;
