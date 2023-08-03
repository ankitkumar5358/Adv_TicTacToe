import LikeButton from "./LikeButton";
import Thumbnail from "./Thumbnail";

function Video({ video }) {
    if (!video?.url) {
        return <div>Error: Video URL is missing or invalid.</div>;
    }

    return (
        <div>
            <Thumbnail video={video} />
            <a href={video.url}>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
            </a>
            <LikeButton video={video} />
        </div>
    );
}

export default Video