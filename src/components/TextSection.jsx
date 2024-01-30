const TextSection = ({ element, type }) => {
    let sectionHeader;
    if (type == "destination") {
        sectionHeader = <h2>{element.name}</h2>;
    }
    if (type == "crew") {
        sectionHeader = (
            <>
                <h4>{element.role}</h4>
                <h3>{element.name}</h3>
            </>
        );
    }
    if (type == "technology") {
        sectionHeader = (
            <>
                <p className='navText'>the Terminology...</p>
                <h3>{element.name}</h3>
            </>
        );
    }
    return (
        <section className={type + "--text"}>
            {sectionHeader}
            <p>{element.description || element.bio}</p>
        </section>
    );
};

export default TextSection;
