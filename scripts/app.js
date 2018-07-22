const Router = ReactRouterDOM.HashRouter;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const Switch = ReactRouterDOM.Switch;

const App = () => (
    <div class="container">
        <Router>
            <div>
                <nav class="navbar navbar-default">
                    <ul class="nav navbar-nav">
                        <li role="presentation"><Link to="/">RSS Reader</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/" component={FeedPage} />
                    
                </Switch>
            </div>
        </Router>
    </div>
    
)

ReactDOM.render(
    <App />,
    document.getElementById('app')
)