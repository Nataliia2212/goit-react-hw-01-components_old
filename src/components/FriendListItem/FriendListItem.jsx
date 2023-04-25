import PropTypes from 'prop-types';

export const FriendListItem = ({ id, name, status, src }) => {
    return <li className="item" key={id}>
                <span className="status">{status}</span>
                <img className="avatar" src={src} alt="avatar" width="48" />
                <p className="name">{ name }</p>
            </li>
}

FriendListItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
}