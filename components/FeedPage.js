class FeedPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stories: []
        };
    }

    componentDidMount() {
        getStories().then((stories) => {
            this.setState((prevState) => ({
                stories: stories
            }));
        });
    }
    
    render() {
        return (
            <div>
                {this.state.stories.map((story) => <FeedStory story={story} /> )}
            </div>
        );
    }
}