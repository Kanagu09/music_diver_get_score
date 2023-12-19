import { API_SCORE_URL } from "./config";
import { API_SONG_URL } from "./config";
import { API_RECENT_URL } from "./config";
import { ApiScoreData } from "./json";
import { ApiSongData } from "./json";
import { ApiRecentData } from "./json";

export function getScoreData(): ApiScoreData[] {
    try {
        const xmlHttp: XMLHttpRequest = new XMLHttpRequest();
        xmlHttp.open("GET", API_SCORE_URL, false);
        xmlHttp.send();
        return JSON.parse(xmlHttp.response).response.play_result_list as ApiScoreData[];
    } catch (e) {
        const errMsg = "Error: スコアデータの取得に失敗しました。";
        alert(errMsg);
        throw Error(errMsg);
    }
}

export function getSongData(): ApiSongData[] {
    try {
        const xmlHttp: XMLHttpRequest = new XMLHttpRequest();
        xmlHttp.open("GET", API_SONG_URL, false);
        xmlHttp.send();
        return JSON.parse(xmlHttp.response).response.music_list as ApiSongData[];
    } catch (e) {
        const errMsg = "Error: 楽曲データの取得に失敗しました。";
        alert(errMsg);
        throw Error(errMsg);
    }
}

export function getRecentData(): ApiRecentData[] {
    try {
        const xmlHttp: XMLHttpRequest = new XMLHttpRequest();
        xmlHttp.open("GET", API_RECENT_URL, false);
        xmlHttp.send();
        return JSON.parse(xmlHttp.response).response as ApiRecentData[];
    } catch (e) {
        const errMsg = "Error: レーティング対象曲データの取得に失敗しました。";
        alert(errMsg);
        throw Error(errMsg);
    }
}
