class FeedSearch extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChangeFeed = this.handleChangeFeed.bind(this);
        this.handleOnlyFavorites = this.handleOnlyFavorites.bind(this);
    }
 
    handleSearch(e) {
        e.preventDefault();
        const searchText = e.target.value;
        this.props.handleSearch(searchText);
    }

    handleChangeFeed(e) {
        const feedName = e.target.value;
        document.querySelector('#dropdownMenu').textContent = e.target.textContent;
        this.props.handleChangeFeed(feedName);
    }

    handleOnlyFavorites(e) {
        this.props.handleOnlyFavorites();
    }

    handleSubmit(e) {
        e.preventDefault;
    }

    render() {
        return (
            <div class="search-form">

                
                <form onSubmit={this.handleSubmit} class="form-inline my-2 my-lg-0">
                    <div class="form-row">
                        <div class="col">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle search-dropdown" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    All Stories
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenu">
                                    <button onClick={this.handleChangeFeed} class="dropdown-item" type="button" value="all">All Stories</button>
                                    <button onClick={this.handleChangeFeed} class="dropdown-item" type="button" value="backchannel">Backchannel</button>
                                    <button onClick={this.handleChangeFeed} class="dropdown-item" type="button" value="the-economist">The Economist</button>
                                    <button onClick={this.handleChangeFeed} class="dropdown-item" type="button" value="matter">Matter</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <input
                                onKeyUp={this.handleSearch}
                                class="form-control mr-sm-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                        </div>
                        <div class="col">
                            <div class="form-check">
                                <input onClick={this.handleOnlyFavorites} type="checkbox" class="form-check-input" id="checkbox-favorites" />
                                <label class="form-check-label" for="checkbox-favorites">Only Favorites</label>
                            </div>
                        </div>
                    </div>
                </form>    
            </div>
        )
    }

}