import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'

export const FriendListItem = ({ id, name, status, avatar }) => {
    return <li className={css.item} key={id}>
                <span className={`${css.status} ${css[status]}`}>{status}</span>
                <img className={css.avatar} src={avatar} alt="avatar" width="48" />
                <p className="name">{ name }</p>
            </li>
}
 

FriendListItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.bool,
    avatar: PropTypes.string,
}