import "./distance.scss"

interface DistanceProps {
    element: {
        distance: string,
        travel: string
    }
}

export const Distance = ({
    element
}: DistanceProps) => {
    return (
        <div className="distance-container flex uppercase">
            <div>
                <h3 className='fs-200 ff-sans-cond letter-spacing-3 text-accent'>Avg. Distance</h3>
                <p className='ff-serif'>{element.distance}</p>
            </div>
            <div>
                <h3 className='fs-200 ff-sans-cond letter-spacing-3 text-accent'>Est. Travel Time</h3>
                <p className='ff-serif'>{element.travel}</p>
            </div>
        </div>
    );
}