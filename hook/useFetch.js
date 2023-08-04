import { useState, useEffect } from "react";
import axios from "axios";


// when this component gets initialised the endpoint must be provided
const useFetch = (endpoint, query) => {

    //MARK: - PROPERTIES
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    //MARK: - BODY

const options = {

  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  headers: {
    'X-RapidAPI-Key': 'a02e9a9795msh1048b9f4a61f50ap163ebfjsnd7cbac208217',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  },
  params: { ...query}
  
};

//MARK: - ACTION
const fetchData = async () => {

    setIsLoading(true);

    try {
        const response = await axios.request
        (options);

        setData(response.data.data);
        setIsLoading(false);

    } catch (error) {

        setError(error);
        //alert('There is an error')
        alert(error); 

    } finally {

        setIsLoading(false)

    }
}

useEffect(() => {

    fetchData();
}, []);

// refetches the data is neccessary
const refetch = () => {

    setIsLoading(true)
    fetchData();

}

return {data, isLoading, error, refetch};

}

// if we dont export it, it doesnt count as a function
export default useFetch