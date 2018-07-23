const Router = ReactRouterDOM.HashRouter;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const Switch = ReactRouterDOM.Switch;

const App = () => (
    <div>
        <Router>
            <div>
                <FeedHeader />
                <div class="page">
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