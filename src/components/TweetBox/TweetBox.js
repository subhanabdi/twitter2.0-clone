import React, { useState } from 'react';

import storage from '../../firebase';

import { Avatar, Button } from '@material-ui/core';

import './TweetBox.css';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();

        storage.child('posts').push(
            {
                displayName: 'Walisson Rodrigues',
                username: 'WalissonOR',
                verified: true,
                text: tweetMessage,
                image: tweetImage,
                avatar: "https://media.licdn.com/dms/image/C4D03AQGhICzng2_VLw/profile-displayphoto-shrink_200_200/0/1652600636737?e=1678924800&v=beta&t=JS28P9ARy3nW1va182qk5L7kwzLIcWOXN-dVzlfQHf4"
            },
            err => {
                if (err)
                    console.log(err);
                else {
                    setInitialValues();
                }
            }
        )
        setInitialValues();
    }

    const setInitialValues = () => {
        setTweetMessage('');
        setTweetImage('');
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://media.licdn.com/dms/image/C4D03AQGhICzng2_VLw/profile-displayphoto-shrink_200_200/0/1652600636737?e=1678924800&v=beta&t=JS28P9ARy3nW1va182qk5L7kwzLIcWOXN-dVzlfQHf4" />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text" />
                </div>
                <input
                    onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text" />
                <Button
                    onClick={sendTweet}
                    className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
