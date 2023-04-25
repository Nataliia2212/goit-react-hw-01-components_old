import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline,id }) => {
    return <li className="item" key={id}>
                <span className="status">{ isOnline}</span>
                <img className="avatar" src={avatar} alt="avatar" width="48" />
                <p className="name">{ name }</p>
            </li>
}

FriendListItem.PropTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string
    
}