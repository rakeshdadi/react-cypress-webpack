import { gql } from '@apollo/client';


export const GET_LAUNCHES = gql`
query getLaunches {
  launches {
    id
    mission_name
    mission_id
    launch_success
  }
}
`