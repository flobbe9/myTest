// TODO: handle exceptions differently later
import fetch from "node-fetch";
import { FetchHeader, isFetchHeaderValid } from "./FetchHeader.ts";


export async function sendHttpRequest(url: string, fetchHeader: FetchHeader) {

    // case: fetchHeader invalid
    if (!isFetchHeaderValid(fetchHeader) || !url) {
        console.log("Falsy FetchHeader.");
        return;
    }

    try {
        const response = await fetch(url, fetchHeader);

        // case: request unsuccessful
        if (!response.ok) {
            console.log(response.status + " " + response.statusText);
            return;
        }

        const jsonResponse = await response.json();

        console.log(jsonResponse);

        return jsonResponse;

    } catch (e) {
        console.log("Error:\n" + e);
    }
}