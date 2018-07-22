class FeedHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <ul class="nav navbar-nav">
                            <li role="presentation"><Link to="/">RSS Reader</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}