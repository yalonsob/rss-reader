class FeedStory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarked: this.props.story.bookmarked
        }
        this.handleFavorite = this.handleFavorite.bind(this);
    }

    handleFavorite(e) {
        this.setState(prevState => {
            return {
                bookmarked: !prevState.bookmarked,
            }
        }, () => {
            let story = this.props.story;
            story.bookmarked = this.state.bookmarked;
            updateStory(story.id, story);
        });
    }

    render() {
        const addFavoriteIcon = "../images/add_favorite.png";
        const favoriteIcon = "../images/favorite.png";
        
        return (
            <div class="card card-story">
                <img class="card-img-top card-story-image" src={this.props.story.imageURL} alt="Story image" />
                <div class="card-body card-body-story">
                    <h5 class="card-title card-title-story">{this.props.story.title}</h5>
                    <div class="card-story-actions">
                        <button onClick={this.handleFavorite} class="favorite-btn">
                            <img alt="favorite" 
                                src={this.state.bookmarked ? favoriteIcon : addFavoriteIcon} 
                            />
                        </button>
                        <div>
                            <Link class="btn btn-primary" 
                                to={{
                                    pathname: `/story/${this.props.story.id}`,
                                    state: this.props.story
                                }}
                            >
                                Read
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
