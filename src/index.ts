import { getScoreData } from "./getData"
import { getSongData } from "./getData"
import { makeCsv } from "./csv"
import { ApiScoreData } from "./json";
import { ApiSongData } from "./json";
import { format } from "./format";

alert("データ集計を開始します。");
const apiScoreData: ApiScoreData[] = getScoreData();
const apiSongData: ApiSongData[] = getSongData();
const allData = format(apiScoreData, apiSongData);
makeCsv(allData);
