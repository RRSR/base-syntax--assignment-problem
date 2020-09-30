import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

    state = {
        userNameList: [
            {userName: 'Raj'},
            {userName: 'Giri'},
            {userName: 'Hari'}
        ]
    };

    nameChangeHandler = (event) => {
        this.setState({
            userNameList: [
                {userName: event.target.value},
                {userName: 'Giri'},
                {userName: 'Hari'}
            ]
        })
    };

    render() {
        return (
            <div className="App">
                <UserInput
                    myOnChange={this.nameChangeHandler}
                    userName={this.state.userNameList[0].userName}/>
                <UserOutput userName={this.state.userNameList[0].userName}/>
                <UserOutput userName={this.state.userNameList[1].userName}/>
                <UserOutput userName={this.state.userNameList[2].userName}/>
            </div>
        );
    }
}

export default App;
