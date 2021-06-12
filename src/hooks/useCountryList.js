import React,{useEffect,useState} from 'react';
import axios from 'axios';

const useCountryList = () => {
  const [countryList, setCountryList] = useState([]);
  const filterCountryList = (countryList) => {
    const newCountryList = countryList.map((country,index)=>country.name);
    return newCountryList
  }
  useEffect(async () => {
    const response = await axios('https://restcountries.eu/rest/v2/all?fields=name');
    setCountryList(filterCountryList(response.data))
  },[]);
  return countryList;
}

export default useCountryList;