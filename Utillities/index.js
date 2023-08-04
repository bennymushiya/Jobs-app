// checks if the data were fetching has an image
export const checkImageURL = (url) => {

    if (!url) return false

    else {

        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
        return pattern.test(url);
    }

};