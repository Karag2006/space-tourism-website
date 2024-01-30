interface TextSectionProps {
    element: {
        name?: string,
        role?: string,
        description?: string,
        bio?: string 
    };
    type: "destination" | "crew" | "technology"
}

export const TextSection = ({
    element,
    type
}: TextSectionProps) => {
    let sectionHeader;
    if (type == "destination") {
        sectionHeader = <h2 className="uppercase ff-serif fs-800">{element.name}</h2>;
    }
    if (type == "crew") {
        sectionHeader = (
            <>
                <p className="uppercase fs-600 ff-serif">{element.role}</p>
                <h2 className="uppercase fs-700 ff-serif text-white">{element.name}</h2>
            </>
        );
    }
    if (type == "technology") {
        sectionHeader = (
            <>
                <p className='uppercase ff-sans-cond fs-300 text-accent letter-spacing-3'>the Terminology...</p>
                <h2 className="uppercase ff-serif fs-700">{element.name}</h2>
            </>
        );
    }

    return (
        <div className={`${type}-text flow`}>
            {sectionHeader}
            <p>{element.description || element.bio}</p>
        </div>
    );
}