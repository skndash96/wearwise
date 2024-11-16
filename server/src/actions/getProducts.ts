import * as cheerio from "cheerio";
import map from "./map";

const getProducts = async (g: string, c: string) => {
    const url = map[g]?.[c];

    console.log(url);

    if (!url) {
        throw new Error("Invalid arguments");
    }

    const res = await fetch(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36',
            'Accept-Language': 'en-US, en;q=0.5'
        }
    });

    const page = await res.text();

    const $ = cheerio.load(page);

    const items = $(".s-result-item, .a-list-item:has(img)");

    let data = items.map((_, item) => {
        const title = $(item).find("[data-cy='title-recipe'], .octopus-pc-asin-title > span").text().trim();
        const price = $(item).find("[data-cy='price-recipe'] .a-offscreen, .octopus-pc-asin-price-section .a-offscreen").text();
        const image = $(item).find(".s-image, img").attr("src");
        const rating = parseFloat($(item).find("[data-cy='reviews-block'] > div:first-child > span:first-child").attr("aria-label")?.split(" ").shift()!)
            || parseFloat($(item).find(".octopus-pc-asin-review-star i span").text()?.split(" ").shift()!);
        const ratingCount = parseInt($(item).find("[data-cy='reviews-block'] > div:first-child > span:nth-child(2) span").attr("aria-label")?.split(" ").shift()!)
            || parseInt($(item).find(".octopus-pc-asin-review-star > span").text());

        return {
            title,
            price,
            image,
            rating,
            ratingCount
        }
    }).get();

    data = data.filter(item => item.title && item.price && item.image && item.rating && item.ratingCount);
    
    return data;
};

export default getProducts;