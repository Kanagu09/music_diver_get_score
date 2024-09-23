import { API_RECORD_URL } from "./config";
import { API_MUSIC_URL } from "./config";
import { API_RATING_URL } from "./config";
import { ApiRecordData } from "./json";
import { ApiMusicData } from "./json";
import { ApiRatingData } from "./json";

export function getScoreData(): ApiRecordData[] {
    try {
        const xmlHttp: XMLHttpRequest = new XMLHttpRequest();
        xmlHttp.open("GET", API_RECORD_URL, false);
        xmlHttp.send();
        return JSON.parse(xmlHttp.response).response.play_result_list as ApiRecordData[];
    } catch (e) {
        const errMsg = "Error: スコアデータの取得に失敗しました。";
        alert(errMsg);
        throw Error(errMsg);
    }
}

export function getSongData(): ApiMusicData[] {
    try {
        const xmlHttp: XMLHttpRequest = new XMLHttpRequest();
        xmlHttp.open("GET", API_MUSIC_URL, false);
        xmlHttp.send();
        return JSON.parse(xmlHttp.response).response.music_list as ApiMusicData[];
    } catch (e) {
        const errMsg = "Error: 楽曲データの取得に失敗しました。";
        alert(errMsg);
        throw Error(errMsg);
    }
}

export function getRecentData(): ApiRatingData[] {
    try {
        const xmlHttp: XMLHttpRequest = new XMLHttpRequest();
        xmlHttp.open("GET", API_RATING_URL, false);
        xmlHttp.send();
        return JSON.parse(xmlHttp.response).response as ApiRatingData[];
    } catch (e) {
        const errMsg = "Error: レーティング対象曲データの取得に失敗しました。";
        alert(errMsg);
        throw Error(errMsg);
    }
}
