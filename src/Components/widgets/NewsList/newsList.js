import React, { Component} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
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
        axios.get('http://localhost:3004/articles?_start='+start+'&_end='+end)        
        .then( Response => {
            this.setState({
                items:[...this.state.items, ...Response.data]
            })
        })
    }
    
    renderNews =  (type)=>{

        let template = null;
        let imageUrl = '';
        switch(type){
            case ('card'):
                template =  this.state.items.map( (item, i)=>(
                    imageUrl = 'http://localhost:3000/images/articles/'+ item.image,
                    <div className="newsList_item">
                        <Link to={'/artticles/'+ item.id}>
                            <div className="listImage">
                               <img src= {imageUrl} alt={ item.id} />
                            </div>
                            <div className="listPara">
                                <h2>{ item.title }</h2> 
                                <p>{item.body}</p>
                            </div>                           
                        </Link>
                        
                    </div>
                ))
                break;
            default:
                template=null;
        }
        return template;
    }
            
    loadMore = ()=>{
        let end = this.state.end + this.state.amount;
        this.request(this.state.end, end)
    }      

    render(){
        console.log(this.state.items)
        return(
            <div>                    
                <div className="listArea">
                    { this.renderNews( this.props.type)}
                    <div className="moreButton">
                        <a className="loadMore" onClick={()=>this.loadMore()}>
                            LOAD MORE
                        </a>
                    </div>                    
                </div>
            </div>
        )
    }
}

export default NewsList;