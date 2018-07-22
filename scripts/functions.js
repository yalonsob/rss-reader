
const createContentDOM = (content) => {
    let contentDOM = document.createElement('div');
    contentDOM.innerHTML = content;
    return contentDOM;
};

const parseItemToStory = (item) => {
    const contentDOM = createContentDOM(item['content:encoded']);
    const imageURL = contentDOM.querySelector('img').src;
    const id = item.guid.substring(21);

    return {
        id: id, 
        title: item.title,
        creator: item.creator,
        date: item.pubDate,
        link: item.guid,
        imageURL: imageURL,
        categories: item.categories,
        rawContent: item['content:encoded'],
        bookmarked: false
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
    return new Promise(function(resolve, reject){
        let stories = getSavedStories();

        if(stories) {
           resolve(stories);
           return;
        }

        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
        let parser = new RSSParser();
        let backchannelURL = 'https://medium.com/feed/backchannel';

        parser.parseURL(CORS_PROXY + backchannelURL, function (err, feed) {
            let stories = feed.items.map((item) => parseItemToStory(item));
            saveStories(stories);
            resolve(stories);
            return;
        });
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





