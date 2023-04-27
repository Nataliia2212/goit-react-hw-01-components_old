import PropTypes from 'prop-types';
import { FriendListItem } from "components/FriendListItem/FriendListItem"
import css from './FriendList.module.css'

export const FriendList = ({ friends }) => {
    return <ul className={css.friendList}>
                {friends.map(({id, name, isOnline, avatar}) => (
                   <FriendListItem
                        key={id}
                        avatar={avatar}
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