import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { RootState } from '../../rootReducer';
import { allActions } from './state/mapDispatchToProps'
import { GET_LAUNCHES } from '../../queries';

import './home.css';

export const _Home = ({ }) => {
  const homeState = useSelector((state: RootState) => state?.homeReducer);
  // const [searchField, setSearchField] = useState<string>('');
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, data, error } = useQuery(GET_LAUNCHES);

  useEffect(() => {
    if (!loading) {
      dispatch(allActions.launchApiResponse(data))
    }
  }, [data, loading, dispatch])

  // const handleChange = (event: any) => {
  //   setSearchField(event.target.value);
  //   console.log(searchField)
  // };

  return (
    <main>
      <h1 data-testid="page-header">SpaceX Launches List</h1>
      {loading && <div data-testid="home-loading">Loading...</div>}
      {error && <div>Something went wrong</div>}
      {/* <input
        type="text"
        placeholder="Search"
        value={searchField}
        onChange={handleChange}
      /> */}
      {homeState.launches.map((launch: any, idx: number) => (
        <div className="home__card" data-testid="launch-card" key={idx} onClick={() => history.push(`/details/${launch.id}`)}>
          <p>Name : {launch.mission_name}</p>
          <p>status: {launch.launch_success ? 'Success' : 'Fail'}</p>
        </div>)
      )}
    </main>
  )
}

export const Home = _Home;
