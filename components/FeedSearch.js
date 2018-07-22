class FeedSearch extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }
 
    handleSearch(e) {
        e.preventDefault();
        const searchText = e.target.value;
        this.props.handleSearch(searchText);
    }

    handleSubmit(e) {
        e.preventDefault;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} class="form-inline my-2 my-lg-0">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle search-dropdown" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Choose your feed
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button" value="all">All Stories</button>
                            <button class="dropdown-item" type="button" value="backchannel">Backchannel</button>
                            <button class="dropdown-item" type="button" value="the-economist">The Economist</button>
                            <button class="dropdown-item" type="button" value="matter">Matter</button>
                        </div>
                    </div>
                    <input 
                        onKeyUp={this.handleSearch} 
                        class="form-control mr-sm-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search" 
                    />
                    
                </form>    
            </div>
        )
    }

}