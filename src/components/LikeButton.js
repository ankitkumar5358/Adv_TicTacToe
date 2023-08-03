import React, { useState } from 'react';

function LikeButton({ video }) {
    const [likes, setLikes] = useState(video.likes);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        if (!isLiked) {
            setLikes(likes + 1);
            setIsLiked(true);
        } else {
            setLikes(likes - 1);
            setIsLiked(false);
        }
    };

    return (
        <div>
            <button onClick={handleLike}>
                {isLiked ? 'Unlike' : 'Like'} ({likes})
            </button>
        </div>
    );
}

export default LikeButton;
