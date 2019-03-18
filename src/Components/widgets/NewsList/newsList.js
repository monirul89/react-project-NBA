import React, { Component} from 'react';
import { CSSTranstitionStyle } from 'react-transition-group';
import { TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../../config';
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
        axios.get(`${ URL }/articles?_start=${start}&_end=${end}`)        
        .then( Response => {
            this.setState({
                items:[...this.state.items, ...Response.data]
            })
        })
    }
    
    renderNews =  (type)=>{

        let template = null

        switch(type){
            case ('card'):
                template =  this.state.items.map( (item, i)=>(                    
                    <CSSTranstitionStyle
                        classNames={{
                            enter:'newsList_wrapper',
                            enterActive:'newsList_wrapper_enter'
                        }}
                    >
                    
                        <div className="newsList_item">
                            <Link to={`/artticles/${item.id}`}>
                                <div className="listImage">
                                <img src="" alt={ item.id} />
                                </div>
                                
                                <div className="listPara">
                                    <h2>{ item.title }</h2> 
                                    <p>{item.body}</p>
                                </div>                         
                            </Link>
                        </div>
                    </CSSTranstitionStyle>
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
                    <TransitionGroup
                    component="div"
                    className="list"
                    >
                        { this.renderNews( this.props.type)}
                    </TransitionGroup>
                    
                    <div className="moreButton">                    
                        <div className="loadMore" onClick={()=>this.loadMore()}>
                            LOAD MORE
                        </div>
                    </div>                    
                </div>
            </div>
        )
    }
}

export default NewsList;