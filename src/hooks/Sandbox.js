import React, { useState } from 'react';
import axios from 'axios';

const getNewProfile = async () => {
    try {
        const response = await axios.get('https://random-data-api.com/api/v2/users');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const setNewProfile = (setAllValues, data) => {
    console.log('SET THESE VALUES: ', data);
    setAllValues(data);
}

export const RandomProfileGenerator = () => {
    const [allValues, setAllValues] = useState({
        first_name: '',
        last_name: '',
        avatar: ''
    });

    const {first_name, last_name, avatar} = allValues;

    // {
    //     "id": 7969,
    //     "uid": "8ec74e87-e501-4edd-b23b-63c295d778b4",
    //     "password": "eTQSAk35wh",
    //     "first_name": "Abe",
    //     "last_name": "Beier",
    //     "username": "abe.beier",
    //     "email": "abe.beier@email.com",
    //     "avatar": "https://robohash.org/repellatexpeditaaccusantium.png?size=300x300&set=set1",
    //     "gender": "Agender",
    //     "phone_number": "+1 1-481-488-3031 x3457",
    //     "social_insurance_number": "348277336",
    //     "date_of_birth": "1995-02-23",
    //     "employment": {
    //         "title": "International Accounting Facilitator",
    //         "key_skill": "Technical savvy"
    //     },
    //     "address": {
    //         "city": "East Jefferey",
    //         "street_name": "Kovacek Unions",
    //         "street_address": "25643 Wilkinson Mall",
    //         "zip_code": "87308",
    //         "state": "Nevada",
    //         "country": "United States",
    //         "coordinates": {
    //             "lat": 17.72568866540459,
    //             "lng": -50.81578373665815
    //         }
    //     },
    //     "credit_card": {
    //         "cc_number": "4855419000297"
    //     },
    //     "subscription": {
    //         "plan": "Premium",
    //         "status": "Idle",
    //         "payment_method": "Google Pay",
    //         "term": "Monthly"
    //     }
    // }

    return (
        <div className="rpg-container">
            <img className="rpg-avatar" src={avatar}></img>
            <p>First name: {first_name}</p>
            <p>Last name: {last_name}</p>
            <button onClick={async () => { 
                let data = await getNewProfile();
                setNewProfile(setAllValues, data);
            }}>
                Generate New Profile
            </button>
        </div>
    );
}