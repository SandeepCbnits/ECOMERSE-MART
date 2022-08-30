import React, { useEffect, useState } from "react";
import style from "./Profile.module.css";
const Profile = () => {
  const [profile, setProfile] = useState([]);
  const getUserData = async (uid) => {
    let profileFetch = await fetch(`http://localhost:9999/users/profile${uid}`);

    let response = await profileFetch.json();

    setProfile(response);
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className={style.container}>
      <h3>Manage your Profiles </h3>
      <div>
        {profile.map((pro) => {
          return (
            <div>
              <img
                src="https://st.depositphotos.com/1898481/5087/i/450/depositphotos_50878063-stock-photo-people.jpg"
                alt="avator"
              />
              <h2>{pro.name}</h2>
              <h4>{pro.email}</h4>
            </div>
          );
        })}
        {/* <h3 > Sandeep Yadav  </h3>
        <p>Recive importent alerts for your profile hear.</p>
        <h4 >Mobile number</h4> */}
      </div>
    </div>
  );
};

export default Profile;
