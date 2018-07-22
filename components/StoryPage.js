class StoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            story: null
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
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
            <div class="container content-story">
                <h1 class="content-story-title">{this.state.story && this.state.story.title}</h1>
                <div class="content-story-main" dangerouslySetInnerHTML={html}></div>
            </div>
        )
    }
}