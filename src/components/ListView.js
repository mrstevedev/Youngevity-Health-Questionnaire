import React from 'react';
import OverviewGreetingStart from './OverviewGreetingStart';
import HeaderGreeting from './HeaderGreeting';

export class ListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null
        }
    }

    componentDidMount() {
        document.body.classList.add("logocolor");
        console.log('categoryId: '+this.props.categoryId);
        if (this.props.categoryId === 1) {
            this.setState({
                message: `Here’s what we’ll be covering, and it should only take a few minutes:`
            })
        } else if (this.props.categoryId === 2) {
            this.setState({
                message: `Nice work, ${sessionStorage.getItem('firstname')}! Section ${ this.props.categoryId -1 } is complete.`
            });
        } else if (this.props.categoryId === 3) {
            this.setState({
                message: `You’re on a roll, ${sessionStorage.getItem('firstname')}! Section ${ this.props.categoryId -1 } is complete.`
            });
        } else if (this.props.categoryId === 4) {
            this.setState({
                message: `You’re on a roll, ${sessionStorage.getItem('firstname')}! Section ${ this.props.categoryId -1 } is complete.`
            });
        } else if (this.props.categoryId === 5) {
            this.setState({
                message: `Almost finished! Section ${ this.props.categoryId -1 } is complete.`
            });
        } else if (this.props.categoryId === 6) {
            this.setState({
                message: 'Woo hoo - you did it!'
            })
        }

        console.log('you will be redirected to splash view in 8 seconds');

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
            this.props.updater(this.state.counter);
        }, 1000);
    }

    render() {
        const categories = ['Joints, Bones & Teeth', 'Metabolism & Energy', 'Brain & Heart Health', 'Digestion & Immunity', 'Additional Health Goals'];
        const newList = categories.map((category, i) => {
            return <li className="overview-list-item" key={i}>{category}</li>
        });

        return (
            <div className="progress-categories-list">
                <HeaderGreeting counter={this.props.counter} />
                <OverviewGreetingStart message={this.state.message} counter={this.props.counter} />
                <ol className="overview-list">
                    {newList}
                </ol>
                <div>
                </div>
            </div>
        )
    }
}

export default ListView;