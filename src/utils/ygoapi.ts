export const getCard = async (id: number): Promise<JSON> => {
    const response = await fetch(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`
    );
    const data = (await response.json()) as JSON;
    return data;
};
