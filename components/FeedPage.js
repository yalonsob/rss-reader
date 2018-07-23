class FeedPage extends React.Component {

    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChangeFeed = this.handleChangeFeed.bind(this);
        this.state = {
            stories: [],
            searchedStories: [],
            selectedFeed: 'all',
            searchText: ''
        };
    };

    componentDidMount() {
        getStories().then((stories) => {
            this.setState((prevState) => ({
                stories: stories,
                searchedStories: stories
            }));
        });
    };

    handleSearch(searchText) {
        searchText = searchText.trim();
        this.setState((prevState) => ({
            searchText: searchText,
            searchedStories: getSearchedStories(prevState.stories, searchText, prevState.selectedFeed)
            // searchedStories: prevState.stories.filter((story) => {
            //     const stringified = [story.title, story.categories.join()].join().toLowerCase();
            //     return stringified.indexOf(searchText) >= 0;
            // })
        }));
    };

    handleChangeFeed(feedName) {
        this.setState((prevState) => ({
            selectedFeed: feedName,
            searchedStories: getSearchedStories(prevState.stories, prevState.searchText, feedName)
            // searchedStories: prevState.stories.filter((story) => feedName === 'all' || story.feedName === feedName)
        }));
    }
    
    render() {
        return (
            <div>
                <div>
                    <FeedSearch handleSearch={this.handleSearch} handleChangeFeed={this.handleChangeFeed} />
                </div>
                <div class="container">
                    {this.state.searchedStories.map((story) => <FeedStory story={story} /> )}
                </div>    
            </div>
        );
    }
}