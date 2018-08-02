import React from 'react';

export class ListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            seconds: 8
        }
    }

    componentDidMount() {
        document.body.classList.add("logocolor");

        //this.interval = setInterval(() => this.tick(), 1000);
        console.log('component did mount');
        console.log(sessionStorage.getItem('firstname'));
        console.log('you will be redirected to begin the quiz in 8 seconds');

        this.setState({
            firstname: sessionStorage.getItem('firstname'),
        });
        this.redirectToSplashScreen();
    }

    componentWillUnmount() {
        document.body.classList.remove("logocolor");
    }

    redirectToSplashScreen() {
        setTimeout(() => {
            this.props.updater(this.state);
        }, 8000);
    }

    // tick() {
    //     this.setState(prevState => ({
    //         seconds: prevState.seconds - 1
    //     }));
    // }

    render() {
        const categories = ['Joints, Bones & Teeth', 'Metabolism', 'Brain & Heart Health', 'Digestion & Immunity', 'Additional Health Goals'];
        const newList = categories.map((category, i) => {
            return <li className="overview-list-item" key={i}>{category}</li>
        });

        return (
            <div className="progress-categories-list">
                <h3>Hi {sessionStorage.getItem('firstname')}!</h3>
                <p>Here's what we'll be covering, and it should only take a few minutes:</p>
                <ol>
                    {newList}
                </ol>
                <div>
                    {/* <p>You will begin in: {this.state.seconds}</p> */}
                </div>
            </div>
        )
    }
}

export default ListView;