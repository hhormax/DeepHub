import React from "react";
import styles from './Users.module.css'

let Users = (props) => {

    if(props.users.length === 0){
        props.setUsers([
            {id: 1, photoURL: 'https://cdn-icons-png.flaticon.com/512/147/147142.png', followed: false, fullName: 'Dmitry', status: 'Boss', location: {city: 'Minsk', country: 'Belarus'}}, 
            {id: 2, photoURL: 'https://cdn-icons-png.flaticon.com/512/147/147142.png', followed: true, fullName: 'Andrey', status: 'Boss too', location: {city: 'Moscow', country: 'Russia'}}, 
            {id: 3, photoURL: 'https://cdn-icons-png.flaticon.com/512/147/147142.png', followed: false, fullName: 'Sasha', status: 'Boss too too', location: {city: 'Kiev', country: 'Ukraine'}},  
            ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoURL} className={styles.photo}/>
                    </div>
                    <div>
                        {u.followed 
                        ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>  
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;