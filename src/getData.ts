import { API_URL } from "./config";
import { ApiData } from "./json";

export function getData(): ApiData[] {
    try {
        const xmlHttp: XMLHttpRequest = new XMLHttpRequest();
        xmlHttp.open("GET", API_URL, false);
        xmlHttp.send();
        return JSON.parse(xmlHttp.response).response.play_result_list as ApiData[];
    } catch (e) {
        alert("Error: データの取得に失敗しました。");
        throw Error("Error: データの取得に失敗しました。");
    }
}
