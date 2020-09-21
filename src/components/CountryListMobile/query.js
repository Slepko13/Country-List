import {gql} from "@apollo/client";

export const COUTRIES = gql`
    {
        Country(orderBy: name_asc) {
            name
            capital
            alpha2Code
            subregion {
                name
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
