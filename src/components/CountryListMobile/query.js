import { gql } from "@apollo/client";

export const COUNTRIES = gql`
    {
        countries(filter:{}) {
            name
            capital
            code
            continent {
            name
            }
        }
    }
`;
