import css from "./FriendList.module.css"

function FriendListItem({ avatar, name, isOnline }) {
    return (
        <div className={css.friendContainer}>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{ name }</p>
            <p className={isOnline ? css.online : css.offline}>{ isOnline ? "Online" : "Offline" }</p>
        </div>
    )
}

export default function FriendList({friends}) {
    return (
        <ul className={css.list}>
            {friends.map(friend => {
              return (<li className={css.listItem} key={friend.id}>
                  <FriendListItem
                       avatar={friend.avatar}
                       name={friend.name}
                       isOnline={friend.isOnline}
                   />
            </li>)
           })}
        </ul>
    )
}