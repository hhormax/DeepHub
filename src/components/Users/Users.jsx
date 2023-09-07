import React from "react";
import s from './Users.module.css';
import axios from "axios"

class Users extends React.Component{

    constructor(props){
        super(props); 
    }

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
             .then(response =>{
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(100);
             })   
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
             .then(response =>{
                this.props.setUsers(response.data.items)
             }) 
    }

    render(){

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++)
        {
            pages.push(i);
        }

        return <div className={s.all}>
            { 
            pages.map(p => {
                const cl = (this.props.currentPage === p && s.selectedPage) + ' ' + s.cells;
                return <span className={cl}
                onClick={() => {this.onPageChanged(p);}}>{p}</span>
            })}
                        
        {
            this.props.users.map(u => <div key={u.id} className={s.user}>
                <div className={s.person}>
                    <div>
                        <img className={s.photo} src={u.photos.small != null ? u.photos.smal : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqI1ZZFfoilOlrVEwpgiCPe3ImRTeAsrNsUw&usqp=CAU"} />
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
                     ? <button className={s.buttonRed} onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button>
                     : <button className={s.buttonGreen} onClick={()=>{this.props.follow(u.id)}}>Follow</button>}
                </div>
                
            </div>)
        }
    </div>
    }
}

export default Users;