export const stringToSlug = (text) => {
    return text
        .trim()
        .toLowerCase()
        .replace(' ', '-')
        .replace('ã', 'a')
        .replace('á', 'a')
        .replace('â', 'a')
        .replace('é', 'e')
        .replace('ê', 'e')
}

export default stringToSlug
