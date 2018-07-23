class FeedPage extends React.Component {

    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChangeFeed = this.handleChangeFeed.bind(this);
        this.handleOnlyFavorites = this.handleOnlyFavorites.bind(this);
        this.state = {
            stories: [],
            searchedStories: [],
            selectedFeed: 'all',
            searchText: '',
            onlyFavorites: false
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
            searchedStories: getSearchedStories(prevState.stories, searchText, prevState.selectedFeed, prevState.onlyFavorites)
        }));
    };

    handleChangeFeed(feedName) {
        this.setState((prevState) => ({
            selectedFeed: feedName,
            searchedStories: getSearchedStories(prevState.stories, prevState.searchText, feedName, prevState.onlyFavorites)
        }));
    };

    handleOnlyFavorites() {
        this.setState(prevState => {
            return {
                ...prevState,
                onlyFavorites: !prevState.onlyFavorites,
                searchedStories: getSearchedStories(prevState.stories, prevState.searchText, prevState.selectedFeed, !prevState.onlyFavorites)
            }
        }, () => {
            const checkbox = document.querySelector('#checkbox-favorites');
            checkbox.checked = this.state.onlyFavorites;
        });

    }
    
    render() {
        return (
            <div>
                <div>
                    <FeedSearch 
                        handleSearch={this.handleSearch} 
                        handleChangeFeed={this.handleChangeFeed} 
                        handleOnlyFavorites={this.handleOnlyFavorites}    
                    />
                </div>
                <div class="container feed-container">
                    {this.state.searchedStories.map((story) => <FeedStory story={story} /> )}
                </div>    
            </div>
        );
    }
}