/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

function FetchMovies({newInput}) {
    const [data, setData] = useState('');

    const apiKey= 'beb9c843'

    const fetchData = async () => {
        if (!newInput)return; //return if user search is empty or undefined
        const endpointUrl = `http://www.omdbapi.com/?t=${newInput}&apikey=${apiKey}`
        const apiData = await fetch(endpointUrl).then(response => response.json());
        setData(apiData)
    }

        useEffect(() => { 
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newInput])

    console.log("Data State:", data); 

    return (
        <>
        {data  && ( //check data object has values before render
            <>
                <div>
                    <img src={data.Poster} alt={data.Title}></img>
                </div>
                <p>{data.Title}</p>
                <p>{<strong>Released: </strong>} {data.Released}</p>
                <p>{<strong>Plot: </strong>}{data.Plot}</p>
                <div>
                    <p>{<strong>Ratings: </strong>}</p>
                            {data.Ratings ? ( //condition to check for ratings
                                <ul style={{ 
                                    listStyle: 'none', 
                                    display: 'flex', 
                                    justifyContent: 'space-evenly'}}>
                                        
                                    {data.Ratings.map((rating, index) => (
                                        <li key={index}>
                                            {rating.Source}: {rating.Value}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No ratings available.</p>
                                )}
                </div>
                </>
            )}
        </>
    )
}

export default FetchMovies