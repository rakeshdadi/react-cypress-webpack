import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../rootReducer';
import { allActions } from './state/mapDispatchToProps'

import './details.css';

export const _Details = ({ }) => {
  const detailsState = useSelector((state: RootState) => state?.detailsReducer);
  const dispatch = useDispatch();
  const { flight_number } = useParams<{ flight_number: string }>();

  useEffect(() => {
    fetch(`https://api.spacexdata.com/v3/launches/${flight_number}`)
      .then(response => response.json())
      .then(data => dispatch(allActions.launchDetailsApiResponse(data)));
  }, [flight_number, dispatch])

  const { launchDetails } = detailsState;
  if (Object.keys(launchDetails).length === 0) {
    return <div data-testid="details-loading">Loading...</div>
  }

  return (
    <>
      <h1>SpaceX Launches Details</h1>
      <div className="details__card" data-testid="launch-details-card">
        <p>Name : {launchDetails.mission_name}</p>
        <p>status: {launchDetails.launch_success ? 'Success' : 'Fail'}</p>
      </div>
    </>
  )
}

export const Details = _Details;
