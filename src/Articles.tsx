import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Articles extends Component<any, any> {
    constructor(props: any) {
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
                    {apiResponse.articles.map((item: any, index: number) => (
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
                                            <span className="icon is-small"><FontAwesomeIcon icon="reply"/></span>
                                        </a>
                                        <a className="level-item">
                                            <span className="icon is-small"><FontAwesomeIcon icon="retweet"/></span>
                                        </a>
                                        <a className="level-item">
                                            <span className="icon is-small"><FontAwesomeIcon icon="heart"/></span>
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
export default Articles;
