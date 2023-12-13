import { getData } from "./getData"
import { makeCsv } from "./csv"
import { ApiScoreData } from "./json";
import { format } from "./format";

alert("データ集計を開始します。");
const apiScoreData: ApiScoreData[] = getData();
const allData = format(apiScoreData);
makeCsv(allData);
