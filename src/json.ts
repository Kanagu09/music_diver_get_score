export type ApiData = {
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

export class SongData {
    music_id: number;
    title: string;
    artist: string;
    genre: string;
    score_easy: number = 0;
    status_easy: string = "";
    rank_easy: string = "";
    score_normal: number = 0;
    status_normal: string = "";
    rank_normal: string = "";
    score_hard: number = 0;
    status_hard: string = "";
    rank_hard: string = "";
    score_extreme: number = 0;
    status_extreme: string = "";
    rank_extreme: string = "";

    constructor(music_id: number, title: string, artist: string, genre: string) {
        this.music_id = music_id;
        this.title = title;
        this.artist = artist;
        this.genre = genre;
    }
}
