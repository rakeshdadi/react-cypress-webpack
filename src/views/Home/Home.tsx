import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../rootReducer';
import { allActions } from './state/mapDispatchToProps'

import './home.css';

export const _Home = ({ }) => {
  const homeState = useSelector((state: RootState) => state?.homeReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    fetch('https://api.spacexdata.com/v4/launches')
      .then(response => response.json())
      .then(data => dispatch(allActions.launchApiResponse(data)));
  }, [dispatch])

  return (
    <main>
      <h1 data-testid="page-header">SpaceX Launches List</h1>
      {homeState.launches.length <= 0 && <div data-testid="home-loading">Loading...</div>}
      {homeState.launches.map((launch: any) => (
        <div className="home__card" data-testid="launch-card" key={launch.id} onClick={() => history.push(`/details/${launch.flight_number}`)}>
          <p>Name : {launch.name}</p>
          <p>status: {launch.success ? 'Success' : 'Fail'}</p>
        </div>)
      )}
    </main>
  )
}

export const Home = _Home;
