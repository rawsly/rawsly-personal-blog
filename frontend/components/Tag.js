import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'components';

const Tag = ({ data: { id, name, code } }) => {
  return (
    <Container id={id}
      type="tag"
      className="flex h-8 flex-col justify-center items-center px-4"
      content={name}
      onClick={() => console.log(code, name, id)}
    />
  )
}

Tag.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  }).isRequired,
}

export default Tag;

const Container = styled(Button)``;
