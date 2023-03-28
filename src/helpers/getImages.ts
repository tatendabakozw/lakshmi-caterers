
export const getImages = (/** @type {number} */ n:number) => {
    const images = [];
    for (let i = 0; i <= n; i++) {
        images.push({
            original: `food/food${i}.jpg`,
        });
    }
    return images;
};