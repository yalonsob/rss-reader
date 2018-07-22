class FeedPage extends React.Component {

    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            stories: [],
            searchedStories: []
        };
    }

    componentDidMount() {
        getStories().then((stories) => {
            this.setState((prevState) => ({
                stories: stories,
                searchedStories: stories
            }));
        });
    }

    handleSearch(searchText) {
        searchText = searchText.trim();
        this.setState((prevState) => ({
            searchedStories: prevState.stories.filter((story) => {
                const stringified = [story.title, story.categories.join()].join().toLowerCase();
                return stringified.indexOf(searchText) >= 0;
            })
        }))

    }
    
    render() {
        return (
            <div>
                <div>
                    <FeedSearch handleSearch={this.handleSearch} />
                </div>
                {this.state.searchedStories.map((story) => <FeedStory story={story} /> )}
            </div>
        );
    }
}