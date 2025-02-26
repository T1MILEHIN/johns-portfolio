import { memo } from 'react';
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types';
// import {} from "react-intersection-observer"

const VideoComponent = memo(({ url }) => (
    <ReactPlayer
        width="80%"
        height="100%"
        style={{ objectFit: 'cover', margin: "0 auto" }}
        playing={true}
        loop={true}
        muted={true}
        url={url}
        playsinline
    />
))

VideoComponent.displayName = 'VideoComponent';

VideoComponent.propTypes = {
    url: PropTypes.any,
}

export default VideoComponent;