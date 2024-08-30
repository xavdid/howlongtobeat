/**
 * Takes care about the http connection and response handling
 */
export declare class HltbSearch {
    protected searchKey: string;
    static BASE_URL: string;
    static DETAIL_URL: string;
    static SEARCH_URL: string;
    static IMAGE_URL: string;
    private static readonly SEARCH_KEY_PATTERN;
    payload: {
        searchType: string;
        searchTerms: any[];
        searchPage: number;
        size: number;
        searchOptions: {
            games: {
                userId: number;
                platform: string;
                sortCategory: string;
                rangeCategory: string;
                rangeTime: {
                    min: number;
                    max: number;
                };
                gameplay: {
                    perspective: string;
                    flow: string;
                    genre: string;
                };
                modifier: string;
            };
            users: {
                sortCategory: string;
            };
            filter: string;
            sort: number;
            randomizer: number;
        };
    };
    detailHtml(gameId: string, signal?: AbortSignal): Promise<string>;
    search(query: Array<string>, signal?: AbortSignal, retry?: boolean): Promise<any>;
    private getSearchKey;
}
