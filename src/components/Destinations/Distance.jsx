const Distance = ({ element }) => {
    return (
        <div>
            <div>
                <h5 className='subheading2'>Avg. Distance</h5>
                <h4 className='subheading'>{element.distance}</h4>
            </div>
            <div>
                <h5 className='subheading2'>Est. Travel Time</h5>
                <h4 className='subheading'>{element.travel}</h4>
            </div>
        </div>
    );
};

export default Distance;
