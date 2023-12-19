import { ApiRecentData, ApiScoreData } from "./json";
import { ApiSongData } from "./json";
import { SongData } from "./json";

export function format(
    apiScoreData: ApiScoreData[],
    apiSongData: ApiSongData[],
    apiRecentData: ApiRecentData[]
): SongData[] {
    let allData: SongData[] = [];
    // 楽曲データ
    for (const data of apiSongData) {
        const song: SongData = new SongData(
            data.music_id,
            data.music_title,
            data.artist_name,
            data.genre_name
        );
        // 難易度
        for (const chart of data.chart_data) {
            switch (chart.difficulty_id) {
                case 0:
                    song.level_easy = chart.level_id + 1;
                    break;
                case 1:
                    song.level_normal = chart.level_id + 1;
                    break;
                case 2:
                    song.level_hard = chart.level_id + 1;
                    break;
                case 3:
                    song.level_extreme = chart.level_id + 1;
                    break;
            }
        }
        allData.push(song);
    }
    allData.sort((a, b) => a.music_id - b.music_id);
    // スコアデータ
    for (const data of apiScoreData) {
        // 存在するか確認
        let index: number = allData.findIndex((all) => all.music_id === data.music_id);
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
    // レーティング対象曲データ
    for (const data of apiRecentData) {
        // 存在するか確認
        let index: number = allData.findIndex((all) => all.music_id === data.music_id);
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
        allData[index].recent = "o";
    }
    return allData;
}

function status(resultData: ApiScoreData): string {
    if (resultData.epic_count > 0)
        return "ALL CRITICAL";
    if (resultData.all_perfect_count > 0)
        return "ALL PERFECT";
    if (resultData.full_combo_count > 0)
        return "FULL COMBO";
    if (resultData.clear_count >= 0)
        return "CLEAR";
    return "FAILED";
};

function rank(resultData: ApiScoreData): string {
    if (resultData.rank_sss_count > 0)
        return "SSS";
    if (resultData.rank_ss_count > 0)
        return "SS";
    if (resultData.rank_s_count > 0)
        return "S";
    if (resultData.rank_a_count > 0)
        return "A";
    if (resultData.rank_b_count > 0)
        return "B";
    if (resultData.rank_c_count > 0)
        return "C";
    if (resultData.rank_d_count > 0)
        return "D";
    if (resultData.rank_e_count > 0)
        return "E";
    return "";
};
