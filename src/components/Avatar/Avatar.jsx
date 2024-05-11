import PropTypes from "prop-types";
import { FaRegUserCircle } from "react-icons/fa";

function Avatar({ src, className }) {
    return (
        <>{src ? <img src={src} alt="avatar" className={className} /> : <FaRegUserCircle className={className} />}</>
    );
}

Avatar.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
};

export default Avatar;
