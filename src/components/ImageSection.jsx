const ImageSection = ({ images, type }) => {
    return (
        <section className={type + "--image"}>
            <img src={images.webp} alt='' />
        </section>
    );
};

export default ImageSection;
