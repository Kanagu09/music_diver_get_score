import { get_data } from "./get_data"
import { make_csv } from "./csv"
import { ApiData } from "./json";
import { format } from "./format";

alert("データ集計を開始します。");
const apiData: ApiData[] = get_data();
const allData = format(apiData);
make_csv(allData);
