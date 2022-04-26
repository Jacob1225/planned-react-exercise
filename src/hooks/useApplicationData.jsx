import { useState, useEffect} from "react";
import axios from "axios";

//Custom Hook that manages the applications state and data
export default function useApplicationData() {

    const [state, setState] = useState ({
        users: {
            kids: [],
            adults: [],
            seniors: []
        },
        errorMsg: ""
    });

    //Fetch users from the 3 endpoints and set application state
    const initialFetchData = async () => {
        try {
            const kids = await axios.get(process.env.REACT_APP_KIDS_ENDPOINT);
            const adults = await axios.get(process.env.REACT_APP_ADULTS_ENDPOINT);
            const seniors = await axios.get(process.env.REACT_APP_SENIORS_ENDPOINT);

            //set the application state
            setState(prev => ({
                ...prev,
                users: {
                    ...prev.users,
                    kids: kids && kids.data ? kids.data.data: [],
                    adults: adults && adults.data ? adults.data.data : [],
                    seniors: seniors && seniors.data ? seniors.data.data : []
                }
            }));   
        } catch (err) {
            console.log(err);
        }  
    }

    //Once app mounts fetch from all three endpoints and update state
    useEffect(() => {
        document.body.style.margin = "0"; //set body style
        document.body.style.backgroundColor = "#f4f6f8";
        initialFetchData();
    }, []);

    //executes when user clicks the retreive user button / fetches from all 3 endpoints
    const filterUsers = (minAge, maxAge) => {
        console.log(typeof(minAge), maxAge);
        //concat all users
        const allUsers = (state.users.kids.concat(state.users.adults)).concat(state.users.seniors)
        
        if(minAge && !maxAge) {

        }
        // const filteredUsers= allUsers.filter(user => {
        //     // if((minAge && maxAge && minAge <= maxAge) && user.age >= minAge && user.age <= maxAge) {
        //     //     return user;
        //     // } else if((minAge && maxAge && minAge > maxAge) && user.){
        //     //     return null;
        //     // }
        // })
        // return filteredUsers;
        return [];
    };

    const setErrorMsg = (msg) => {
        setState(prev => ({
            ...prev,
            errorMsg: msg
        }));
    }

    return {
        state,
        filterUsers,
        setErrorMsg
    };
};
    