import {gql} from '@apollo/client';

export const FETCH_USERS = gql`
    query fetchUsers {
        fetchUsers {
            _id
            firstName
            lastName
            fullName
        }
    }
`;