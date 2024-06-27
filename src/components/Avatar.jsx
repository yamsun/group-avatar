import React from 'react';
import PropTypes from 'prop-types';
// import './styles.css';

function Avatar({
  type,
  src,
  username,
  initialColor,
  max,
  index,
  text,
  sizeClass,
  isLast,
  isMore,
}) {
  if (type === 'dataImg') {
    return (
      <div className={`imgContainer ${isLast ? 'last' : ''}`}>
        <img
          className={`avatars ${isLast ? 'last' : ''} ${
            sizeClass ? sizeClass : ''
          }`}
          src={src}
          alt={username}
        />
        {isLast && <div className="num">+{text}</div>}
      </div>
    );
  }

  if (type === 'initial') {
    const initials = username ? username.charAt(0) : '?';
    return (
      <div
        className="avatarsNames"
        style={{
          // width: '40px',
          // height: '40px',
          // backgroundColor: initialColor,
          color: '#fff',
        }}
      >
        {initials}
      </div>
    );
  }

  return null;
}

Avatar.propTypes = {
  type: PropTypes.oneOf(['dataImg', 'initial']).isRequired,
  src: PropTypes.string,
  username: PropTypes.string,
  initialColor: PropTypes.string,
};

Avatar.defaultProps = {
  src: '',
  username: '',
  initialColor: 'gray',
};

export default Avatar;
