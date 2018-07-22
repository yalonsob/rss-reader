const Router = ReactRouterDOM.HashRouter;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const Switch = ReactRouterDOM.Switch;

const App = () => (
    <div>
        <Router>
            <div>
                <header>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <ul class="nav navbar-nav">
                            <li role="presentation"><Link to="/">RSS Reader</Link></li>
                        </ul>
                    </nav>
                </header>
                <div class="container page">
                    <Switch>
                        <Route exact path="/" component={FeedPage} />
                        <Route path="/story/:id" component={StoryPage} />
                    </Switch>
                </div>
            </div>
        </Router>
    </div>
    
)

ReactDOM.render(
    <App />,
    document.getElementById('app')
)