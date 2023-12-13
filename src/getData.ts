import { API_SCORE_URL } from "./config";
import { ApiScoreData } from "./json";

export function getData(): ApiScoreData[] {
    try {
        const xmlHttp: XMLHttpRequest = new XMLHttpRequest();
        xmlHttp.open("GET", API_SCORE_URL, false);
        xmlHttp.send();
        return JSON.parse(xmlHttp.response).response.play_result_list as ApiScoreData[];
    } catch (e) {
        const errMsg = "Error: データの取得に失敗しました。";
        alert(errMsg);
        throw Error(errMsg);
    }
}
