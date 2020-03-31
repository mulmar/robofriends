import React from 'react';
import Card from './Card'// uses card component

const Cardlist = (fromApp) => {//the cardlist gets input form the App component which is the array with the filtered robots
 //   const { robots, fake} = fromApp;
    return (
        //loops the array per line and sends every line to the card component
             fromApp.robots.map((entry,i) =>{
                return (
                    <Card 
                    key={i} //key is needed when using array in react
                    id={fromApp.robots[i].id} // sends id to card component
                    name={fromApp.robots[i].name} // sends name to card component
                    email={fromApp.robots[i].email}// sends email to card component
                    />
                );
            })
             
    );
}

export default Cardlist;