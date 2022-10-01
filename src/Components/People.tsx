import axios, {AxiosResponse} from 'axios'; 
import React, {useState, useEffect} from 'react';
import { Person } from '../Models/Person';
import Cards from './Cards';

const People = () => {
    const [userData, setUserData] = useState<Person[]>([]);
    console.clear();
    console.log('People User data: ', userData);

    useEffect(() => {
        axios
            .get<Person[]>('https://swapi.dev/api/people/')
            .then((response: AxiosResponse) => {
                setUserData(response.data);
  
            })
  
    }, []);

    return (
        
    <>
    <Cards userData={userData} />
    </>
    );
};
export default People;
