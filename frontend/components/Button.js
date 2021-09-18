import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ onClick, content, type, disabled, icon, iconPosition, color, className, ...props }) => {
  // const Icon = icon;
  const classes = ["btn", className, type, disabled ? 'disabled' : '', color].filter(c => !!c).join(' ');
  return (
    <Btn className={classes} onClick={onClick} type={type} disabled={disabled} color={color} {...props}>
      {icon && iconPosition === 'left' && icon}
      {type !== 'icon' && content}
      {icon && iconPosition === 'right' && icon}
    </Btn>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  content: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary', 'outline', 'icon', 'tag']),
  color: PropTypes.oneOf(['primary', 'secondary', 'danger', 'warning', 'success', '']),
  icon: PropTypes.element,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  content: '',
  type: 'primary',
  color: '',
  icon: null,
  iconPosition: 'left',
  disabled: false,
  className: ''
};

export default Button;

const Btn = styled.button`
`;