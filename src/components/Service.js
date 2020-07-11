import React, { Component } from 'react';
import Title from './Title.js';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';

export default class Service extends Component {

state={
services:[
    {
        icon:<FaCocktail/>,
        title: "free cocktails",
        info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloremque reprehenderit, ipsam eius, culpa deserunt et inventore perspiciatis velit minima enim odio, quis iste sed repudiandae quod eum? Cumque, omnis?'
    },
    {
        icon:<FaHiking/>,
        title: "Endless Hiking",
        info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloremque reprehenderit, ipsam eius, culpa deserunt et inventore perspiciatis velit minima enim odio, quis iste sed repudiandae quod eum? Cumque, omnis?'
    },
    {
        icon:<FaShuttleVan/>,
        title: "Free shuttle",
        info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloremque reprehenderit, ipsam eius, culpa deserunt et inventore perspiciatis velit minima enim odio, quis iste sed repudiandae quod eum? Cumque, omnis?'
    },
    {
        icon:<FaBeer/>,
        title: "Strongest Beer",
        info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloremque reprehenderit, ipsam eius, culpa deserunt et inventore perspiciatis velit minima enim odio, quis iste sed repudiandae quod eum? Cumque, omnis?'
    },
    
]
}

    render() {
        return (
            <section className='services'>
                <Title title='services'/>
                <div className='services-center'>
                    {this.state.services.map((item,index) => {
                     return <article key={index} className='service'>
                         <span>{item.icon}</span>
                         <h6>{item.title}</h6>
                         <p>{item.info}</p>

                     </article>
                    })}
                </div>
               
            </section>
        )
    }
}
