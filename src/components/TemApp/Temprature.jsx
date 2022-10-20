import { useEffect, useState } from 'react'
import { FaStreetView, FaCloud, FaWind } from 'react-icons/fa'
// import { BsWater, BsThermometer } from 'react-icons/bs'
import '../Style/style.css'
export default function Temperature() {
    const [city, setCity] = useState(null)
    const [search, setSearch] = useState('Lucknow')
    useEffect(() => {

        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5df18d676c47740364f3d25baf648e6f`;
            const res = await fetch(url);
            const data = await res.json()
            console.log(data)
            setCity(data)
        };
        fetchApi();
    }, [search])
    return (
        <>
            <div className='box center-screen'>
                <div className='container'>
                    <div className='inputData'>
                        <input type='search' value={search} className='inputField'
                            onChange={(event) => {setSearch(event.target.value)
                            }}
                            />

                    </div>
                    {!city ? (<p className='errorMsg'>No Data found</p>) : (
                        <div>
                            <span><FaCloud style={{ color: '#fff', fontSize: '4rem',
                             fontWeight: '6rem', marginTop: '4px' }} /></span>
                            <div className='info'>
                                <h4 className='location'><FaStreetView 
                                style={{ fontSize: '3rem' }} />{search}</h4>
                                <h1 className='temp'>{city.main.temp}</h1>
                                <h4 className='tempmin-max'>
                                    Min:{city.main.temp_min} | Max:{city.main.temp_max}

                                </h4>
                            </div>
                            {/* <div className='button-section'>
                                <div className='section btn-section-1' id="wind">
                                    <FaWind /><br />
                                    <span>{city.wind.speed}km/hr</span>
                                    <br />
                                    wind
                                </div>
                                <div className='section btn-section-2' id="humidity">
                                    <BsWater />
                                    <br />
                                    <span>{city.main.humidity}%</span>
                                    <br />
                                    humidity
                                </div>
                                <div className='section btn-section-3' id="feels_like">
                                    <BsThermometer />
                                    <br />
                                    <span>{parseInt(city.main.feels_like)}</span>
                                    <br />
                                    pressure
                                </div> */}
                            {/* </div> */}
                        </div>

                    )}


                </div>
            </div>
        </>
    )
}