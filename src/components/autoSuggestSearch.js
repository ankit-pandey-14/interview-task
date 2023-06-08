import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HotelIcon from '@mui/icons-material/Hotel';

const AutoSuggestSearch = () => {
    const hotelSuggestions = useSelector((state) => state?.search?.hotelSuggestions);
    const placeSuggestions = useSelector((state) => state?.search?.placeSuggestions);
    
    const navigate = useNavigate();
    
    return(
        <div className='auto-suggest'>
            {
                placeSuggestions && (
                    <>
                        <div className='label'>Location</div>
                        {
                            placeSuggestions.length
                            ? (
                                placeSuggestions?.map((place) => (
                                    <div
                                        key={place?.place_id}
                                        className='d-flex suggestion pointer'
                                        onClick={() => {
                                            navigate(`/place/${place?.place_id}`, {
                                                state: {
                                                    place,
                                                }
                                            })
                                        }}
                                    >
                                        <span> <LocationOnIcon /> </span>
                                        <h4>
                                            {
                                                place?.format?.main_text
                                            },
                                        </h4>
                                        <span>
                                            {
                                               place?.format?.secondary_text
                                            }
                                        </span>
                                    </div>
                                ))
                            )
                            : <div className='suggestion'>No match found...</div>

                        }
                    </>
                )
            }
            {
                hotelSuggestions && (
                    <>
                        <div className='label'>Hotels</div>
                        {
                            hotelSuggestions.length
                            ? (
                                hotelSuggestions?.map((hotel) => (
                                    <div
                                        onClick={() => {
                                            navigate(`/hotel/${hotel?.hotelID}`, {
                                                state: {
                                                    hotel,
                                                }
                                            })
                                        }}
                                        key={hotel?.hotelID}
                                        className='d-flex suggestion pointer'
                                    >
                                        <span> <HotelIcon /> </span>
                                        <h4>{hotel?.title},</h4>
                                        <span>{hotel?.address}</span>
                                    </div>
                                ))
                            )
                            : <div className='suggestion'>No match found...</div>

                        }
                    </>
                )
            }
        </div>
    );
};

export default memo(AutoSuggestSearch);