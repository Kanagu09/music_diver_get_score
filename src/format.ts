import { ApiData } from "./json";
import { SongData } from "./json";

export function format(apiData: ApiData[]): SongData[] {
    let allData: SongData[] = [];
    for (const data of apiData) {
        let index: number = -1;
        // 存在するか確認
        for (let i = 0; i < allData.length; i++) {
            if (allData[i].music_id === data.music_id) {
                index = i;
                break;
            }
        }
        // 存在しない場合，作成，曲名等設定
        if (index === -1) {
            const song: SongData = new SongData(
                data.music_id,
                data.music_title,
                data.artist_name,
                data.genre_name
            );
            index = allData.push(song) - 1;
        }
        // スコアデータ
        switch (data.difficulty_id) {
            case 0:
                allData[index].score_easy = data.score;
                allData[index].status_easy = status(data);
                allData[index].rank_easy = rank(data);
                break;
            case 1:
                allData[index].score_normal = data.score;
                allData[index].status_normal = status(data);
                allData[index].rank_normal = rank(data);
                break;
            case 2:
                allData[index].score_hard = data.score;
                allData[index].status_hard = status(data);
                allData[index].rank_hard = rank(data);
                break;
            case 3:
                allData[index].score_extreme = data.score;
                allData[index].status_extreme = status(data);
                allData[index].rank_extreme = rank(data);
                break;
        }
    }
    return allData;
}

function status(result_data: ApiData): string {
    if (result_data.epic_count > 0)
        return "ALL CRITICAL";
    if (result_data.all_perfect_count > 0)
        return "ALL PERFECT";
    if (result_data.full_combo_count > 0)
        return "FULL COMBO";
    if (result_data.clear_count >= 0)
        return "CLEAR";
    return "FAILED";
};

function rank(result_data: ApiData): string {
    if (result_data.rank_sss_count > 0)
        return "SSS";
    if (result_data.rank_ss_count > 0)
        return "SS";
    if (result_data.rank_s_count > 0)
        return "S";
    if (result_data.rank_a_count > 0)
        return "A";
    if (result_data.rank_b_count > 0)
        return "B";
    if (result_data.rank_c_count > 0)
        return "C";
    if (result_data.rank_d_count > 0)
        return "D";
    if (result_data.rank_e_count > 0)
        return "E";
    return "";
};
