import axios from "axios";

export const adminLogin = async (adminLoginData) => {
    try {
        const adminLogin = await axios.post('http://localhost:3030/users/login' , adminLoginData );
        // console.log(adminLogin);
        return adminLogin?.data;
        
    } catch (error) {
        throw new Error("adminLogin => " , error );
        
    }
}

export const adminSignup = async (adminSignupData) => {
    try {
        const adminSignup = await axios.post('http://localhost:3030/users/signup' ,adminSignupData );
        return adminSignup?.data;
    } catch (error) {
        throw new Error("adminSignup => " , error );
    }
}