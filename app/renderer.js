import React from 'react'
import ReactDOM from 'react-dom'

// import Application from "./components/application/application.component"

class Application extends React.Component{

    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <button className="fill-width">
                    This button does not do anything
                </button>
            </div>
        )
    }
}

ReactDOM.render(<Application />, document.getElementById('application'));