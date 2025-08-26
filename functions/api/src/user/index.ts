import { HTTPMethod, HttpRequest } from "@repo/types";
import axios from "axios";

type ResponseObject = {
    [name: string]: unknown;
};

/* eslint-disable */
export async function user(request?: HttpRequest): Promise<ResponseObject> {
    // https://axios-http.com/docs/api_intro
    // https://restful-api.dev/

    // example GET
    const get = await axios<any, ResponseObject>({
        url: "https://api.restful-api.dev/objects"
    });
    console.log(get.data);

    // example POST
    axios({
        method: HTTPMethod.POST,
        url: "https://api.restful-api.dev/objects",
        data: {
            "year": 2019,
            "price": 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
        }
    }).then(response => {
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    });

    // We're only returning the get response here so we can run test cases against this function
    return get;
}

// to test directly, run: `node dist/user/index.js` after build
user();