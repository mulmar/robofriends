import React, { Fragment } from 'react';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Cardlist from '../components/Cardlist';// shares props with cardlsit, and uses the output from cardlist
import Searchbox from '../components/Searchbox';// shares props with searchbox, and uses the output from searchbox
import { setSearchField } from '../actions'; // we need the action to create a new state
import { connect } from 'react-redux'; // method to make components aware of the redux state (it will make the subscibe method redundant)
//import { robots } from './robots';  // we need the {} because the robots.js can export multiple outputs; uses the robot object to send info to other 

// to which piece of state should the APP component listen to, and send it as props to the App
const mapStateToProps = (state) => { // receives a state and returns an object (the object is going to be used as props by the App component)
    return{
        searchField: state.searchField // the searchfield state is coming from the reducer   (should be state.searchRobots.searchField)
    }
}

//which props the app components should be listen to that are actions and need to get dispatched
const mapDispatchToProps = (dispatch) => { // the prop dispatch (redux naming convention) is send into the reducer
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)) // onsearchChange is a functions that dispatches the actions.js to the reducer. This listens to the event of the action
    }
}


class App extends React.Component {
    constructor() {// constructor is the part which is run first when the App is called
        super()//super makes sure the constructor is run first
        this.state = { // reads input from searchfield and uses this to send a filtered array to the cardlist component
            robots : []//,
 //           searchfield: ''
        }
    }

    componentDidMount(){// make a call to website
//        console.log(this.props.store.getState())
         fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) // convert the response into a json
        .then(users => this.setState({robots: users})); // fill the robots array with the users
    }

    // the first real function/method in the App class
    // replaced (by making use of redux) with the mapDispatchToProps
//    onSearchChange = (event) => { // the "=" and the "=>" are needed everytime when you make your own method in a component (otherwise the "this."" will not point to the main component, but to the component where the event happens = input in the searchbox component is this example)
//        this.setState({ // setState function is always needed to update state
//            searchfield: event.target.value // searchfield becomes the value entered in the searchbox component
//        }) }

    render() {
        const filteredRobots = 
        this.state.robots.filter(robot =>{return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());})
        //the array filtered robots only holds the lines that contain the string from the searchbox, the array is send to the cardlist
        if (this.state.robots.length === 0 ) { // check if the robots are loaded, if not show loading
            return <h1>Loading</h1>
        }
        else{ // otherwise show the robots
        return(
            <Fragment>
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <Searchbox searchChange={this.props.onSearchChange}/>
                   <Scroll>
                       <ErrorBoundry>
                <Cardlist robots={filteredRobots}/> 
                </ErrorBoundry>
                    </Scroll>
            </div>
            </Fragment>
        );
    
    } 
}
}
export default connect(mapStateToProps, mapDispatchToProps)(App); // higher order function: it returns another function which it will run with APP
// connect needs 2 parameters; these name are user in redux as a convention
// connects does: subcribe app to any state changes in the redux store.
// everytime the store is updated the component is aware and will listen to changes and if needed make a view change
// App is now aware of the redux store and anytime there are changes it might be interested to it (based on the action type)
// mapStateToProps: what state should the App Component listed to!
// mapDispatchToProps: what action should the App Component listen to!
//Connects get these props to the APP
