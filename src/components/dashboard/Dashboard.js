import React, { Component } from 'react';
import './Dashboard.css';
import Header from '../header/header';
import ErrorHandler from '../error/ErrorHandler';
import  {connect} from 'react-redux';

class Dashboard extends Component {
    
    
    render() {
        var user_message = null;
        if(this.props.flag === false){
                
                user_message = <ErrorHandler classDetails="alert alert-danger noteMessage" msg="You can't submit a blank notes." />
        }else if(this.props.flag === true){
            
                user_message = <ErrorHandler classDetails="alert alert-success noteMessage" msg="Notes saved successfully." />
               
        }

        var tickets =  this.props.cards.map((item,index)=>{
                return (
                    <div key={item.id} className="ticket">
                                <div className="ticket-header">
                                    <div className="ticket-title">{item.title}</div>
                                    <div className="ticket-remove" onClick={()=>this.props.deleteTicket(item.id)}>X</div>
                                </div>
                                
                                <div className="ticket-message">{item.message}</div>
                    </div>
                )
            })
        return (
            <div className="container-fluid"> 
                <Header headerName="G notes"/>                
                <div className='page-body'>
                    <div className='left'>
                        {tickets}
                    </div>
                    <div className='right'>
                        {user_message}
                        <div className="notes-section">
                            <button type="button" className="btn btn-light notes">Add Notes</button>
                        </div>                    
                    <form >
                   
                    <div className="form-group">
                        <label >Title</label>
                        <input type="text" className="form-control" id="username"  onChange={this.props.handleTitle}/>
                    </div>
                    <div className="form-group">
                        <label >Body</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={this.props.handleMessage}></textarea>
                    </div>
                    <button type="button" className="btn btn-primary submit" onClick={()=>this.props.addNotesHandler(this.props.generateId)}>Submit</button>
                </form>
                    </div>
                </div>
            
            </div> 
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        cards: state.cardList,
        generateId: state.counter,
        flag:state.flag
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
        handleTitle: (e)=> dispatch({type:'HANDLE_TITLE',payload: e.target.value}),
        handleMessage: (e)=> dispatch({type:'HANDLE_MESSAGE',payload: e.target.value}),
        addNotesHandler: (val)=>dispatch({type:'ADD_NOTES',payload:val}),
        deleteTicket: (id)=>dispatch({type:'DELETE_NOTES',payload:id}),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);