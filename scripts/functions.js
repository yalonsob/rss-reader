const supportedFeeds = [
    {
        'feedName': 'backchannel',
        'feedURL': 'https://medium.com/feed/backchannel'
    }, {
        'feedName': 'the-economist',
        'feedURL': 'https://medium.com/feed/the-economist'
    }, {
        'feedName': 'matter',
        'feedURL': 'https://medium.com/feed/matter'
    }
];

const createContentDOM = (content) => {
    let contentDOM = document.createElement('div');
    contentDOM.innerHTML = content;
    return contentDOM;
};

const parseItemToStory = (item, feedName) => {
    const contentDOM = createContentDOM(item['content:encoded']);
    const imageURL = contentDOM.querySelector('img') ? contentDOM.querySelector('img').src : '../images/no-image.png';
    const id = item.guid.substring(21);

    return {
        id: id, 
        title: item.title,
        creator: item.creator,
        date: moment(item.isoDate),
        link: item.guid,
        imageURL: imageURL,
        categories: item.categories,
        rawContent: item['content:encoded'],
        bookmarked: false,
        feedName: feedName
    };
};

const getSavedStories = () => {
    const storiesJSON = localStorage.getItem('stories');
    try {
        return storiesJSON ? JSON.parse(storiesJSON) : null;
    } catch(e) {
        return null;
    }
};

const saveStories = (stories) => {
    localStorage.setItem('stories', JSON.stringify(stories));
};

const getStories = () => {

    return new Promise(function (resolve, reject) {
        let stories = getSavedStories();

        if(stories) {
            resolve(sortStoriesByDate(stories));
            return;
        }

        getAllStoriesFromFeeds(supportedFeeds).then((stories) => {
            resolve(sortStoriesByDate(stories));
        });
    });
};

const sortStoriesByDate = (stories) => {
    return stories.sort((a, b) => {
        if (a.date > b.date) {
            return -1;
        } else if (a.date < b.date) {
            return 1
        } else {
            return 0;
        }
    });
};

const getStoriesFromFeed = (supportedFeed) => {
    return new Promise(function(resolve, reject) {
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
        let parser = new RSSParser();
        let url = supportedFeed.feedURL;

        parser.parseURL(CORS_PROXY + url, function (err, feed) {
            let stories = feed.items.map((item) => parseItemToStory(item, supportedFeed.feedName));
            resolve(stories);
            return;
        });
    });
};

const getAllStoriesFromFeeds = (supportedFeeds) => {
    const promises = supportedFeeds.map((supportedFeed) => getStoriesFromFeed(supportedFeed));
    return Promise.all(promises).then((feeds) => {
        let stories = [];
        feeds.forEach((feed) => {
            stories = stories.concat(feed);
        });
        saveStories(stories);
        return stories;
    });
};

const updateStory = (storyId, newStory) => {
    getStories().then((stories) => {
        let newStories = stories.map((story) => {
            return (story.id === storyId) ? newStory : story;
        });
        saveStories(newStories);
    });
};

const getFeedName = (feed) => {
    const feeds = {
        'backchannel': 'Backchannel',
        'the-economist': 'The Economist',
        'matter': 'Matter'
    };
    return feeds[feed];
};

const getFormattedDate = (date) => {
    return moment(date).format('DD MMM YYYY');
};

const getSearchedStories = (stories, searchText, feedName, onlyFavorites) => {
    return stories
        .filter((story) => feedName === 'all' || story.feedName === feedName)
        .filter((story) => {
            const stringified = [story.title, story.categories.join()].join().toLowerCase();
            return stringified.indexOf(searchText) >= 0;
        })
        .filter((story) => !onlyFavorites || story.bookmarked);
};




