import React from 'react';

export class NameForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            enableBtn: false,
            firstname: ''
        }
    }

    componentDidMount() {
        document.body.classList.add("logocolor");
    }

    componentWillUnmount() {
        document.body.classList.remove("logocolor");
    }

    handleChange(e) {
        this.setState({
            enableBtn: e.target.value !== '',
            firstname: this.refs.firstname.value
        });
    }

    handleSubmitButton(e) {
        e.preventDefault();

        // By giving the input the `ref` attribute, we can access it anywhere
        const firstName = this.refs.firstname.value;

        this.setState({
            firstname: firstName
        }, () => this.props.updater(firstName), this.saveToLocal());
    }

    saveToLocal() {
        sessionStorage.setItem('firstname', this.state.firstname);
        console.log(this.state.firstname);
    }

    render() {
        return (
            <div className="nameForm">
                <div className="sub-container">
                    <form onSubmit={this.handleSubmitButton.bind(this)}>
                        <h2>What's your<br /> first name?</h2>
                        <div>
                            <input
                                type="text"
                                ref="firstname"
                                onChange={this.handleChange.bind(this)}
                            />
                        </div>
                        <input
                            type="submit"
                            className="button btn"
                            value={this.state.enableBtn ? 'Continue' : 'Please enter your name'}
                            disabled={!this.state.enableBtn}
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default NameForm;