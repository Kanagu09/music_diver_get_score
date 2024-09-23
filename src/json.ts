// API_RECORD_URL
export type ApiRecordData = {
    "card_id": string,
    "music_id": number,
    "difficulty_id": DifficultyId,
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

// API_MUSIC_URL
export type ApiMusicData = {
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

// API_RATING_URL
export type ApiRatingData = {
    "card_id": string,
    "music_id": number,
    "difficulty_id": DifficultyId,
    "score": number,
    "all_perfect_count": number,
    "full_combo_count": number,
    "level_id": number,
    "rate": number,
    "music_title": string,
    "artist_name": string,
};

export type ApiChartData = {
    "chart_id": number,
    "music_id": number,
    "chart_type_id": number,
    "difficulty_id": DifficultyId,
    "level_id": number,
    "level_name": string,
};

type DifficultyId = 0 | 1 | 2 | 3 | 4;

// export
export class SongData {
    music_id: number;
    title: string;
    artist: string;
    genre: string;

    rating_easy: null | string = null;
    level_easy: null | number = null;
    score_easy: null | number = null;
    status_easy: null | string = null;
    rank_easy: null | string = null;

    rating_normal: null | string = null;
    level_normal: null | number = null;
    score_normal: null | number = null;
    status_normal: null | string = null;
    rank_normal: null | string = null;

    rating_hard: null | string = null;
    level_hard: null | number = null;
    score_hard: null | number = null;
    status_hard: null | string = null;
    rank_hard: null | string = null;

    rating_extreme: null | string = null;
    level_extreme: null | number = null;
    score_extreme: null | number = null;
    status_extreme: null | string = null;
    rank_extreme: null | string = null;

    rating_abyss: null | string = null;
    level_abyss: null | number = null;
    score_abyss: null | number = null;
    status_abyss: null | string = null;
    rank_abyss: null | string = null;

    constructor(musicId: number, title: string, artist: string, genre: string) {
        this.music_id = musicId;
        this.title = title;
        this.artist = artist;
        this.genre = genre;
    }
}
