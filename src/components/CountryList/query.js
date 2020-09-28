import {gql} from "@apollo/client";

export const COUNTRIES = gql`
    {
        Country(orderBy: name_asc) {
            name
            capital
            subregion {
                region {
                    name
                }
            }
            flag{
                svgFile
            }

        }
    }
`;
