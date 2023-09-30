import React from "react";
import s from './Users.module.css';
import {NavLink} from "react-router-dom";

const ava = 'https://the-wedding.ru/upload/photo/InfoArticles/svadebnym_spetsialistam_kak_ispolzovat_vkontakte_dlya_prodvizheniya_biznesa.jpg';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++)
    {
        pages.push(i);
    }

    return <div className={s.all}>
            { 
            pages.map(p => {
                const cl = (props.currentPage === p && s.selectedPage) + ' ' + s.cells;
                return <span className={cl}
                onClick={() => {props.onPageChanged(p);}}>{p}</span>
            })}
                        
        {
            props.users.map(u => <div key={u.id} className={s.user}>
                <div className={s.person}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={s.photo} src={u.photos.small != null 
                                ? u.photos.small 
                                : ava} />
                        </NavLink>
                    </div>
                    <div className={s.data}>
                        <div>
                            <div className={s.name}>{u.name}</div>
                        </div>
                    </div>
                </div>           
                <div>
                    {u.followed 
                    ? <button disabled={props.followingInProgress.some(id=>id === u.id)} className={s.buttonRed}
                    onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id=>id === u.id)} className={s.buttonGreen} 
                    onClick={()=>{props.follow(u.id)}}>Follow</button>
                    }
                </div>
            </div>)
        }
    </div>
}

export default Users;