import React from 'react';
import '../styles/profile.scss';
//import {connect} from 'react-readux';



const Profile = ()=>{
    return (
        <div className="profile">
            <div>
            <img src="images.jpeg" alt=""/>
            <div>
            </div>
                <form className="form">
                    <div id="name">
                        <label>Names:</label>
                        <input type="text" name="Name" required></input>
                    </div>
                    <div id="NID">
                        <label>National ID:</label>
                        <input type="number" name="National Id" required></input>
                    </div>
                    <div id="phone">
                        <label>Phone:</label>
                        <input type="number" name="Phone" required></input>
                    </div>
                    <div id="email">
                        <label>Email:</label>
                        <input type="text" name="Email" required></input>
                    </div>
                    <div id="button">
                        <button className="Edit" id="edit">Edit</button>
                        <button className="Delete" id="delete">Delete</button> 
                    </div>
                </form>
            </div>
        </div>
    );

};

export default Profile;
