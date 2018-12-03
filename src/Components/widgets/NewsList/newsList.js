import React, { Component} from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { Link } from 'react-router-dom';
import axios from 'axios';

// import { URL } from '../../../config';

class NewsList extends Component{
    state={
        items:[],
        start:this.props.start,
        end:this.props.start + this.props.amount,
        amount:this.props.amount
    }

    componentWillMount(){
        axios.get('http://localhost:3004/articles?_start='+ this.state.start +'&_end='+this.state.end)        
        .then( Response => {
            this.setState({
                items:[...this.state.items, ...Response.data]
            })
        })
    }

    render(){
        console.log(this.state.items);
        return(
            <div>
                Hello List
            </div>
        )
    }
}

export default NewsList;