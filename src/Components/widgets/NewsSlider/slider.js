import React, { Component } from 'react';
import axios from 'axios';
import SliderTemplates from './slider_templates';

class NewsSlider extends Component{

    state={
        news:[]
    }

    componentWillMount(){
        axios.get('http://localhost:3004/articles?_start=0&_end=3')
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
            <SliderTemplates data={this.state.news }/>
        )
    }
}

export default NewsSlider;