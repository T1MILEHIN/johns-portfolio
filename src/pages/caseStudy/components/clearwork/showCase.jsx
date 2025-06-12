import PhoneDesignShowcase from '../phoneDesignShowcase';
import PropTypes from 'prop-types';


const ShowCase = ({images}) => {
    const groupedImages = [];
    for (let i = 0; i < images.length; i += 3) {
        groupedImages.push(images.slice(i, i + 3));
    }
    return (
         <div>
            {groupedImages.map((group, groupIndex) => (
                <div
                    key={groupIndex}
                    className="grid grid-cols-1 lg:grid-cols-3 lg:gap-0 gap-10 my-10"
                >
                    {group.map((img, idx) => (
                        <div
                            key={idx}
                            className={idx === 1 ? "lg:mt-20 relative z-10" : "relative z-10"}
                        >
                            {/* <div className={`${idx === 1 ? "-bottom-20" : " bottom-0"} absolute left-1/2 -translate-x-1/2 translate-y-1/2 w-[70%] h-10 bg-black/20 rounded-full blur-md z-0`} /> */}

                            <PhoneDesignShowcase>
                                <img src={img} className="w-full" alt="" />
                            </PhoneDesignShowcase>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

ShowCase.propTypes = {
    images: PropTypes.array
}

export default ShowCase;