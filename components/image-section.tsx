interface ImageSectionProps {
    alt: string;
    images: { png: string, webp: string }
    type: "destination" | "crew" | "technology"
}

export const ImageSection = ({ 
    alt,
    images,
    type
 }: ImageSectionProps) => {
    return ( 
        <picture id={`${alt}-image`}>
            <source srcSet={images.webp} type="image/webp" />
            <img src={images.png} alt={alt} />
        </picture>
    );
};