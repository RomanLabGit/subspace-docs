import React, { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './index.css'; 

const isDev = process.env.NODE_ENV === 'development';
const dummyData = isDev ? require('./dummyLeaderboard.json') : null;

const TranslationsLeaderboard = () => {
    const { siteConfig } = useDocusaurusContext();
    
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [currentSelection, setCurrentSelection] = useState('allTime');

    useEffect(() => {
        const loadData = (filename) => {
            if (isDev) {
                setLeaderboardData(dummyData);
            } else {
                import(`./${filename}`)
                    .then((data) => setLeaderboardData(data.default))
                    .catch((err) => console.error('Error loading leaderboard data:', err));
            }
        };

        const fileToLoad = currentSelection === 'allTime' ? 'leaderboard.json' : 'leaderboard-monthly.json';
        loadData(fileToLoad);
    }, [currentSelection]);

    // Function to format the word count according to the locale, 
    // using the locale from siteConfig if available, or falling back to the browser's default locale.
    const formatWords = (wordsCount) => {
        const numericCount = Number(wordsCount);
        const locale = siteConfig.locale || navigator.language;
        return numericCount.toLocaleString(locale);
    };

    // Filter users with Translated Words > 0
    const filteredLeaderboardData = leaderboardData.filter(user => Number(user["Translated (Words)"]) > 0);

    return (
        <div className="leaderboard-container">
            <div className="leaderboard-buttons">
                <button onClick={() => setCurrentSelection('allTime')}>All Time</button>
                <button onClick={() => setCurrentSelection('monthly')}>Monthly</button>
            </div>
            {filteredLeaderboardData.map((user, index) => (
                <div key={index} className="user-card">
                    <div className="avatar-container">
                        <span className="ranking">
                            {index === 0 ? '🏆' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1}
                        </span>
                        <img className="avatar" src={user.avatarUrl} alt={`${user.Name}'s avatar`} />
                        <div className="user-info">
                            <span className="username">{user.Name}</span>
                            <span className="languages">{user.Languages || 'N/A'}</span>
                        </div>
                    </div>
                    <span className="translated-words">
                        {formatWords(user["Translated (Words)"])} words
                    </span>
                </div>
            ))}
        </div>
    );
};

export default TranslationsLeaderboard;
