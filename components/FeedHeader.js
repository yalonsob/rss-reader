class FeedHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light header-navbar">
                        <ul class="nav navbar-nav">
                            <li role="presentation">
                                <Link to="/">
                                    <img class="home-logo" src="../images/rss-logo.png" alt="rss-logo" />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}