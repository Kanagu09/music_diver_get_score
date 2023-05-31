import { FILE_NAME } from "./config";
import { SongData } from "./json";

export function make_csv(allData: SongData[]): void {
    checkData(allData);
    console.info('filename:', FILE_NAME);
    const csvStr: string = toString(allData);
    save(csvStr);
}

function checkData(allData: SongData[]): void {
    if (allData.length === 0) {
        alert("Error: 参照データが存在しません。");
        throw Error("Error: 参照データが存在しません。");
    }
}

function toString(allData: SongData[]): string {
    const keys: string[] = Object.keys(allData[0]);
    // @ts-ignore
    const array_data = allData.map((record) => (keys.map((key) => record[key])));
    // @ts-ignore
    let csv_str = [].concat([keys], array_data);
    console.log(csv_str);
    let prepare = function (field: any): string {
        return '"' + ('' + field).replace(/"/g, '""') + '"';
    }
    return csv_str.map((record) => (
        // @ts-ignore
        record.map((field) => (prepare(field))).join(',')
    )).join('\n');
}

function save(csvStr: string) {
    const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
    const blob = new Blob([bom, csvStr], { 'type': 'text/csv' });
    const url = window.URL || window.webkitURL;
    const blobURL = url.createObjectURL(blob);
    let a = document.createElement('a');
    a.download = decodeURI(FILE_NAME);
    a.href = blobURL;
    a.type = 'text/csv';
    a.click();
}
