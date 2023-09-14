import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';

// const ProfileInfo = () => {
//   return (
//     <div className={s.profileInfo}>
//         <div>
//           <img className={s.ava} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqI1ZZFfoilOlrVEwpgiCPe3ImRTeAsrNsUw&usqp=CAU"></img>
//         </div>
//         <div className={s.descriptionBlock}>
//           <div className={s.name}>Name</div>
//           <div className={s.lastName}>Lastname</div>
//         </div>
//     </div>
//   );
// };

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader/>;
  }

  return (
    <div>
      <div>
        <img src={props.profile.photos.large}/>
      </div>
      <div className={s.aboutMe}>{props.profile.aboutMe}</div>
      <div className={s.aboutMe}>{props.profile.fullName}</div>
    </div>
  );
};

export default ProfileInfo;