const FeedStory = (props) => {

    return (
        <div class="card card-story">
            <img class="card-img-top card-story-image" src={props.story.imageURL} alt="Story image"/>
                <div class="card-body card-body-story">
                    <h5 class="card-title">{props.story.title}</h5>
                    <div class="card-story-actions">
                        <div>
                            <img alt="favorite" src="../images/add_favorite.png"/>
                        </div>
                        <div>  
                            <Link class="btn btn-primary" to="/">Read</Link>
                        </div>
                    </div>
                    
                </div>
        </div>
    );
};