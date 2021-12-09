import { gql } from "@apollo/client";

export const COUNTRY = gql`
    query GetCountry($name: ID!)  {
        country(code: $name)
        {
            name
            capital
            native
            continent {
                name
            }
            currency
            phone
            languages {
                name
            }
        }
    }
`;
