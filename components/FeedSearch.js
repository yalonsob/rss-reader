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
                    <input 
                        onKeyUp={this.handleSearch} 
                        class="form-control mr-sm-2 search-input" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search" 
                    />
                </form>    
            </div>
        )
    }

}