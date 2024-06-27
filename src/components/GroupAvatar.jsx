import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
// import './styles.css';

function GroupAvatar({ iconsList, show, max, separated, size }) {
  const sizeClassMap = {
    xs: 'extrasmall',
    s: 'small',
    m: 'medium',
    l: 'large',
  };

  const sizeClass = sizeClassMap[size] || 'medium';

  return (
    <div className={`avatarGroup ${separated ? 'separated' : ''}`}>
      {iconsList?.slice(0, max).map((item, index) => {
        let isLast = max == index + 1;
        let isMore = iconsList?.length > max;
        if (iconsList?.length - max == 1) {
          isLast = false;
        }
        const isDataImg = !(item.icon?.length <= 5);
        return (
          <div
            className="avatar"
            key={item.id}
            style={{
              borderRadius: '50%',
              padding: '5px',
            }}
          >
            <span className="avatarName">
              {!isLast
                ? item?.name
                : item?.name + ' + ' + String(iconsList?.length - max)}
            </span>
            {isDataImg ? (
              <i>
                <Avatar
                  type="dataImg"
                  src={item.icon}
                  isLast={isLast}
                  isMore={isMore}
                  text={iconsList?.length - max + 1}
                  size={size}
                  sizeClass={sizeClass}
                />
              </i>
            ) : (
              <i>
                <Avatar
                  type="initial"
                  username={item.name}
                  initialColor="black"
                  sizeClass={sizeClass}
                />
              </i>
            )}
          </div>
        );
      })}
      {/* {show && iconsList.length > max ? (
        <div className="avatarNum">
          <span>+{iconsList.length - max}</span>
        </div>
      ) : null} */}
    </div>
  );
}

GroupAvatar.propTypes = {
  iconsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.string,
      AvtarColor: PropTypes.string,
    })
  ).isRequired,
  show: PropTypes.bool,
  max: PropTypes.number,
};

GroupAvatar.defaultProps = {
  show: false,
  max: 3,
};

export default GroupAvatar;
