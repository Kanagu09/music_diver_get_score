import { getData } from "./getData"
import { make_csv } from "./csv"
import { ApiData } from "./json";
import { format } from "./format";

alert("データ集計を開始します。");
const apiData: ApiData[] = getData();
const allData = format(apiData);
make_csv(allData);
