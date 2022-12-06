import {gql} from '@apollo/client';


export const CREATE_USER = gql`
    mutation createUser($firstName: String!, $lastName: String!) {
        createUser(firstName: $firstName, lastName: $lastName) {
            _id
            firstName
            fullName
            lastName
        }
    }
`;