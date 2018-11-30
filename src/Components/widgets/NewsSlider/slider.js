import React, { Component } from 'react';
import axios from 'axios';

class NewsSlider extends Component{

    state={
        news:[]
    }

    componentWillMount(){
        axios.get('http://localhost:3004/articles')
        // axios.get('http://localhost:3004/videos')
        // axios.get('http://localhost:3004/teams')
        .then( response => {
            this.setState({
                news: response.data
            })
        })

    }

    render(){

        console.log(this.state.news)
        return(
            <div>
                SLIDER
            </div>
        )
    }
}

export default NewsSlider;