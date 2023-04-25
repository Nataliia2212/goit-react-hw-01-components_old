import PropTypes from 'prop-types';
import { FriendListItem } from "components/FriendListItem/FriendListItem"

export const FriendList = ({ friends }) => {
    return <ul className="friend-list">
                {friends.map(({id, name, isOnline, avatar}) => (
                   <FriendListItem
                        key={id}
                        src={avatar}
                        name={name}
                        status={isOnline}
                    />
                ))}
            </ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
            avatar: PropTypes.string,
        })
    )
}