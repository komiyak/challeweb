'use strict';

// noinspection JSUnusedGlobalSymbols
class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false};
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        // return e(
        //     'button',
        //     { onClick: () => this.setState({ liked: true }) },
        //     'Like'
        // );

        return (
            <button onClick={() => this.setState({liked: true})}>
                Like
            </button>
        );
    }
}

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            apiResponse: []
        }
    }

    componentDidMount() {
        fetch("http://dev.komiyak.com.s3-website-us-west-2.amazonaws.com/challeweb/json/articles.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        apiResponse: result.data
                    });
                }
            )
    }

    render() {
        const {isLoaded, apiResponse} = this.state;
        if (isLoaded) {
            return (
                <div>
                    {apiResponse.articles.map((item, index) => (
                        <article key={index} className="media">
                            <figure className="media-left">
                                <p className="image is-96x96">
                                    <img src={item.image} alt="placeholder"/>
                                </p>
                            </figure>

                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong>{item.title}</strong>
                                        <small>{item.created_at}</small>
                                        <br/>
                                        {item.summary}
                                    </p>
                                </div>

                                <nav className="level is-mobile">
                                    <div className="level-left">
                                        <a className="level-item">
                                            <span className="icon is-small"><i className="fas fa-reply"></i></span>
                                        </a>
                                        <a className="level-item">
                                            <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                                        </a>
                                        <a className="level-item">
                                            <span className="icon is-small"><i className="fas fa-heart"></i></span>
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </article>
                    ))}
                </div>
            );
        } else {
            return <div>Loading...</div>
        }
    }
}

function App() {
    return (
        <section className="section">
            <Articles/>
        </section>
    );
}

//ReactDOM.render(e(LikeButton), domContainer);

ReactDOM.render(
    React.createElement(App),
    document.getElementById('app')
);
