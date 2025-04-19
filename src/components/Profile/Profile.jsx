
import css from "./Profile.module.css"
export default function Profile({name, tag, location, image, stats}) {
    return (
    <div className={css.profileBox}>
        <div className={css.imageBox}>
        <img
        src={image}
                    alt="User avatar"
                    className={css.image}
        />
                <p className={css.name}>{name}</p>
                <p className={css.lightgrey}>@{tag}</p>
                <p className={css.lightgrey}>{location }</p>
        </div>

        <ul className={css.list}>
            <li className={css.listItem}>
                <span>Followers</span>
                <span>{stats.followers}</span>
            </li>
            <li className={css.listItem}>
                <span>Views</span>
                <span>{stats.views}</span>
            </li>
            <li className={css.listItem}>
                <span>Likes</span>
                <span>{stats.likes}</span>
            </li>
        </ul>
    </div>
    )
}