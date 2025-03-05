// write the component code here
import react from 'react';
import './style.css'
const Usercard = () => {
    const profilephoto = "path/to/profilephoto.jpg" ;
    const name = "Tarun Tej" ;
    const mail = "adfghjklpoiuytrewq" ;
    const phonenumber  = "1234567890" ;
    const address =  "6889/kbgdbc/lkjhgvcdvc";

    return (
        <div>
        <img src={profilephoto} alt="profilephoto" />
        <h2>{name}</h2>
        <p>Email :{mail}</p>
        <p>Phone number :{phonenumber}</p>
        <p>Address :{address}</p>
        </div>
    );
};

export default Usercard;