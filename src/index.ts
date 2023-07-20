import { getData } from "./getData"
import { makeCsv } from "./csv"
import { ApiData } from "./json";
import { format } from "./format";

alert("データ集計を開始します。");
const apiData: ApiData[] = getData();
const allData = format(apiData);
makeCsv(allData);
