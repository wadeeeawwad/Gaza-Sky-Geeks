import React from 'react';
import Moment from 'moment';

class TaskItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isEdit: false,
            setReminder: false
        };
        this.onEditSubmit = this.onEditSubmit.bind(this);
        
    }
    
    onDelete(){
        const{ onDelete, title } = this.props;
        onDelete(title);
    }

    onEdit(){
        this.setState({isEdit: true});
    }

    onEditSubmit(event){
        event.preventDefault();
        this.props.onEditSubmit(this.titleInput.value, this.descInput.value, this.props.title);
        this.setState({isEdit: false});
    }
    render(){
        const {title, desc} = this.props;
        return(
            <div>
                {
                    this.state.isEdit
                    ?(
                    <div className="card w-75">
                    <div className="card-body">
                        <form onSubmit={this.onEditSubmit}>
                            <h3 className="card-title">
                                <input placeholder="Title" ref={titleInput => this.titleInput = titleInput}  defaultValue={title}/>
                            </h3>
                <textarea placeholder="Description" ref={descInput => this.descInput = descInput} defaultValue={desc}/>
                <br />
               
                <br />
                <button className="btn btn-success" >Save</button>    
                        </form>
                        </div>
                        </div>
                    )
                    :(
                        <div className="card w-75">
                        <div className="card-body">
                        <h3 className="card-title">
                        <b>
                        {title}
                        </b></h3>                         
                        <h4 className="card-text"> {desc}</h4>              
                       
                        <br />              
                        <button className="btn btn-primary" onClick={this.onEdit}> Edit </button>              
                        <button className="btn btn-danger" onClick={this.onDelete}> Delete </button>
                        <hr />
                        </div>
                        </div>
                    )
                }
              
                </div>
        );
    }
}

export default TaskItem;