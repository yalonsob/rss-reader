class StoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            story: null
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        getStories().then((stories) => {
            const story = stories.find((story) => {
                return story.id === id;
            });
            this.setState((prevState) => ({
                story: story
            }));
        });
    }

    render() {
        let html = { __html: this.state.story && this.state.story.rawContent };
        return (
            <div class="container">
                <h1>{this.state.story && this.state.story.title}</h1>
                <div dangerouslySetInnerHTML={html}></div>
            </div>
        )
    }
}