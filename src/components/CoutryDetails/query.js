import {gql} from "@apollo/client";

export const COUNTRY = gql`
    query GetCountry($name: String)  {
        Country
        (name: $name)
        {
            name
            population
            capital
            officialLanguages {
                name
            }
            subregion {
                region {
                    name
                }
            }
            currencies {
                name
                symbol
            }
            flag {
                svgFile
            }
            callingCodes {
                name
            }
            timezones {
                name
            }
        }
    }
`;
