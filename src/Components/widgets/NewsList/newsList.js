import React, { Component} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Link from 'react-router-dom';
import axios from 'axios';

import './newsList.css';

class NewsList extends Component{
    state={
        items:[],
        start:this.props.start,
        end:this.props.start + this.props.amount,
        amount:this.props.amount
    }

    componentWillMount(){
        this.request(this.state.start, this.state.end)
    }
    request = (start, end)=>{
        axios.get('http://localhost:3004/articles?_start='+ start +'&_end='+ end)        
        .then( Response => {
            this.setState({
                items:[...this.state.items, ...Response.data]
            })
        })
    }
        const renderNews = (type) =>{
            let template = null;

            switch(type){
                case ('card'):
                    template =  this.state.map( (item, i)=>(
                        <div>
                            <div className="newsList_item">
                                <Link to={'/artticles/'+ item.id}>
                                    <h2>{ item.titlle }</h2>
                                </Link>
                            </div>
                        </div>
                    ))
                    break;
                default:
                    template=null;
            }
            return template;
        }
        render(){
            return(
                <div>
                    { this.renderNews( this.props.type )}
                </div>
            )
        }
}

export default NewsList;