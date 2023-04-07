import type { YGOResponse } from "./types";

export const getCard = (id: number): Promise<YGOResponse> => {
    return fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
        .then((response) => response.json())
        .then((response) => {
            return response as YGOResponse;
        });
};
