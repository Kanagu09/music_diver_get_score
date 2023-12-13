export type ApiScoreData = {
    "card_id": string,
    "music_id": number,
    "difficulty_id": 0 | 1 | 2 | 3,
    "score": number,
    "score_update_at": string,
    "critical_num": number,
    "perfect_num": number,
    "great_num": number,
    "good_num": number,
    "bad_num": number,
    "miss_num": number,
    "max_combo": number,
    "clear_count": number,
    "epic_count": number,
    "all_perfect_count": number,
    "full_combo_count": number,
    "rank_sss_count": number,
    "rank_ss_count": number,
    "rank_s_count": number,
    "rank_a_count": number,
    "rank_b_count": number,
    "rank_c_count": number,
    "rank_d_count": number,
    "rank_e_count": number,
    "created_at": string,
    "updated_at": string,
    "genre_id": number,
    "genre_name": string,
    "music_title": string,
    "artist_name": string
};

export type ApiSongData = {
    "music_id": number,
    "genre_id": number,
    "artist_id": number,
    "music_title_id": number,
    "bpm": number,
    "advance_deliver_start_date": string,
    "deliver_start_date": string,
    "deliver_end_date": string,
    "create_mode_flag": number,
    "locked_state": number,
    "genre_name": string,
    "artist_name": string,
    "music_title": string,
    "chart_data": ApiChartData[],
};

export type ApiChartData = {
    "chart_id": number,
    "music_id": number,
    "chart_type_id": number,
    "difficulty_id": 0 | 1 | 2 | 3,
    "level_id": number,
    "level_name": string,
};

export class SongData {
    music_id: number;
    title: string;
    artist: string;
    genre: string;
    level_easy: number = 0;
    score_easy: number = 0;
    status_easy: string = "";
    rank_easy: string = "";
    level_normal: number = 0;
    score_normal: number = 0;
    status_normal: string = "";
    rank_normal: string = "";
    level_hard: number = 0;
    score_hard: number = 0;
    status_hard: string = "";
    rank_hard: string = "";
    level_extreme: number = 0;
    score_extreme: number = 0;
    status_extreme: string = "";
    rank_extreme: string = "";

    constructor(musicId: number, title: string, artist: string, genre: string) {
        this.music_id = musicId;
        this.title = title;
        this.artist = artist;
        this.genre = genre;
    }
}
