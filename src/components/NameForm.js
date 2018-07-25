import React from 'react';

export class NameForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            enableBtn: false,
            firstname: ""
        }

        this.handleSubmitButton = this.handleSubmitButton.bind(this);

    }

    handleChange(e) {
        this.setState({
            firstname: e.target.value,
            enableBtn: e.target.value !== ''
        });
    }

    handleSubmitButton(e) {
        e.preventDefault();

        // By giving the input the `ref` attribute, we can access it anywhere
        const firstName = this.refs.firstname.value;

        console.log('first name is: '+ firstName);

        // Submit the value to the parent component
        //this.props.handleSubmitButton(firstName);

        this.setState({
            firstname: this.refs.firstname.value
        }, () => {});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitButton.bind(this)}>
                    <label>What's your First Name?</label><br />
                    <div>
                        <input
                            type="text"
                            ref="firstname"
                            onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <input
                        type="submit"
                        value={this.state.enableBtn ? 'Continue' : 'Please enter your name'}
                        disabled={!this.state.enableBtn}
                    />
                </form>
            </div>
        )
    }
}

export default NameForm;