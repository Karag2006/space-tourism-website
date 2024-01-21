import Image from "next/image";

interface ImageSectionProps {
    images: { png: string, webp: string }
    type: "destination" | "crew" | "technology"
}

export const ImageSection = ({ 
    images,
    type
 }: ImageSectionProps) => {
    return (
        <section className={`${type}--image`}>
            <Image src={images.webp} alt='' fill />
        </section>
    );
};