const ImageSection = ({ images, type }) => {
    const image =
        type == "technology" ? (
            <img src={images.portrait} alt='' />
        ) : (
            <img src={images.webp} alt='' />
        );

    return <section className={type + "--image"}>{image}</section>;
};

export default ImageSection;
