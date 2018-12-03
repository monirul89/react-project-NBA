import React, { Component } from 'react';
import axios from 'axios';
import SliderTemplates from './slider_templates';

// Terminal has to write below code
// json-server --watch db.json --port 3000

class NewsSlider extends Component{

    state={
        news:[]
    }

    componentWillMount(){
        axios.get('http://localhost:3004/articles?_start='+ this.props.start +'&_end='+this.props.amount)
        // axios.get('http://localhost:3004/videos')
        // axios.get('http://localhost:3004/teams')
        .then( response => {
            this.setState({
                news: response.data
            })
        })

    }

    render(){
        return(
            <SliderTemplates data={this.state.news } type={ this.props.type } settings={ this.props.settings}/>
        )
    }
}

export default NewsSlider;