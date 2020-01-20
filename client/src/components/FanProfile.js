import React from 'react'



class FanProfile extends React.Component {

    componentDidMount() {
        if (!this.props.username) {
            this.props.history.push('/login')
        }
    }


        render() {

            return (
                <div>
                <h1>Fan Profile Page</h1>
                <h2>Welcome {`${this.props.username}`}!</h2>
                <button 
                onClick={this.props.signOut}>
                Sign Out
                </button>
                </div>
            )


        }
    }


export default FanProfile