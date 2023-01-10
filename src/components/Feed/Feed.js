import React, { useState, useEffect } from 'react';
import FlipMove from 'react-flip-move';

import storage from '../../firebase';

import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';

import './Feed.css';

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        // Firebase storage
        storage.child('posts').on('value', snapshot => {
            if (snapshot.val() != null) {
                setPosts({
                    ...snapshot.val()
                })
            }
        })

    }, []);

    return (
        <div className="feed">

            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
            <FlipMove>
                {
                    Object.keys(posts).reverse().map(id => {
                        return (
                            <Post
                                key={id}
                                avatar={posts[id].avatar}
                                displayName={posts[id].displayName}
                                username={posts[id].username}
                                verified={posts[id].verified}
                                text={posts[id].text}
                                image={posts[id].image} />
                        )
                    })
                }
            </FlipMove>
        </div>
    )
}

export default Feed;
