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
        filteredUsers: [],
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
                    kids: kids && kids.data.data.length ? kids.data.data: [],
                    adults: adults && adults.data.data.length ? adults.data.data : [],
                    seniors: seniors && seniors.data.data.length ? seniors.data.data : []
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
        //concat all users
        const allUsers = (state.users.kids.concat(state.users.adults)).concat(state.users.seniors)
        
        const filteredUsers = allUsers.filter(user => {
            let returnValue;
            //If only min age is set
            if(minAge && !maxAge) {
                user.age >= minAge ? returnValue = user : returnValue = null;

            } else if(!minAge && maxAge) {
                user.age <= maxAge ? returnValue = user : returnValue = null;
            } else {
                user.age >= minAge && user.age <= maxAge ? returnValue = user : returnValue = null;
            }
            
            return returnValue;
        });

        setState(prev => ({
            ...prev,
            filteredUsers: filteredUsers.length ? filteredUsers : []
        }));
        
    };

    //Set the error msg across the app
    const setErrorMsg = (msg) => {
        setState(prev => ({
            ...prev,
            errorMsg: msg
        }));
    };

    return {
        state,
        filterUsers,
        setErrorMsg
    };
};
    