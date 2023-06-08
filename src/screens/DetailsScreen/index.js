import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const DetailsScreen = () => {
    const [detail, setDetail] = useState();

    const location = useLocation();
    // here getting data through the location part but in general we fetch data from API which in result
    // gives us fallback ui when trying to directly manipulate the url

    
    useEffect(() => {
        let item;
        if(location?.pathname.includes('place')){
            window.localStorage.setItem("place", JSON.stringify(location?.state?.place))
            item = window.localStorage.getItem("place");
        }else{
            window.localStorage.setItem("hotel", JSON.stringify(location?.state?.hotel))
            item = window.localStorage.getItem("hotel");
        }

        if(! (item==="undefined") ){
            setDetail(JSON.parse(item));
        }
        return () => {
            window.localStorage.removeItem("hotel");
            window.localStorage.removeItem("place");
        }
    }, [location])

    return(
        <main className='hotel-detail pt-10'>
            {
                location?.pathname.includes('place')
                ? detail
                    ? (<>
                        <h2 className='text-center'>More About your selected place</h2>
                        <div>
                            <h4>Id : </h4>
                            <span>{detail?.place_id || '--'}</span>
                        </div>
                        <div>
                            <h4>Place Name : </h4>
                            <span>{detail?.format?.main_text || '--'}</span>
                        </div>
                        <div>
                            <h4>Other Info : </h4>
                            <span>{detail?.format?.secondary_text || '--'}</span>
                        </div>
                        <div>
                            <h4>Description : </h4>
                            <span>{detail?.description || '--'}</span>
                        </div>
                    </>)
                    : <h2 className='text-center'>Please do not manipulte the url directly</h2>
                : detail
                    ? (<>
                        <h2 className='text-center'>More About your selected hotel</h2>
                        <div>
                            <h4>Id : </h4>
                            <span>{detail?.hotelID || '--'}</span>
                        </div>
                        <div>
                            <h4>Name : </h4>
                            <span>{detail?.title || '--'}</span>
                        </div>
                        <div>
                            <h4>Address : </h4>
                            <span>{detail?.address || '--'}</span>
                        </div>
                        <div>
                            <h4>Description : </h4>
                            <span>{detail?.description || '--'}</span>
                        </div>
                    </>)
                    : <h2 className='text-center'>Please do not manipulte the url directly</h2>
            }
        </main>
    );
};

export default DetailsScreen