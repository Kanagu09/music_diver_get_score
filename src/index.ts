import { getScoreData } from "./getData"
import { getSongData } from "./getData"
import { getRecentData } from "./getData"
import { makeCsv } from "./csv"
import { ApiRecordData } from "./json";
import { ApiMusicData } from "./json";
import { ApiRatingData } from "./json";
import { format } from "./format";

alert("データ集計を開始します。");
const ApiRecordData: ApiRecordData[] = getScoreData();
const ApiMusicData: ApiMusicData[] = getSongData();
const ApiRatingData: ApiRatingData[] = getRecentData();
const allData = format(ApiRecordData, ApiMusicData, ApiRatingData);
makeCsv(allData);
