import React from "react";
import s from './Users.module.css';
import {NavLink} from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../API/api";

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
                                ? u.photos.smal 
                                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqI1ZZFfoilOlrVEwpgiCPe3ImRTeAsrNsUw&usqp=CAU"} />
                        </NavLink>
                    </div>
                    <div className={s.data}>
                        <div>
                            <div>{u.name}</div>
                            {/* <div>{u.status}</div> */}
                        </div>
                        <div>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>  
                        </div>
                    </div>
                </div>           
                <div>
                     {u.followed 
                     ? <button disabled={props.followingInProgress.some(id=>id === u.id)} className={s.buttonRed} onClick={()=>{
                        props.toggleFollowingProgress(true, u.id);
                        usersAPI.unfollowUser(u.id).then(data =>{
                            if(data.resultCode === 0){
                                props.unfollow(u.id)
                            }
                        props.toggleFollowingProgress(false, u.id);
                        })                   
                        }}>Unfollow</button>

                     : <button disabled={props.followingInProgress.some(id=>id === u.id)} className={s.buttonGreen} onClick={()=>{
                        props.toggleFollowingProgress(true, u.id);
                        usersAPI.followUser(u.id).then(data =>{
                            if(data.resultCode === 0){
                                props.follow(u.id)
                            }
                        props.toggleFollowingProgress(false, u.id);
                        }) 
                        }}>Follow</button>
                        }
                </div>
            </div>)
        }
    </div>
}

export default Users;