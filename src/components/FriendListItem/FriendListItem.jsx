import PropTypes from 'prop-types';

export const FriendListItem = ({ id, name, isOnline, avatar }) => {
    return <li className="item" key={id}>
                <span className="status">{isOnline}</span>
                <img className="avatar" src={avatar} alt="avatar" width="48" />
                <p className="name">{ name }</p>
            </li>
}

FriendListItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
}