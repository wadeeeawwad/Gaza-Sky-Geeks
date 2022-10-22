import React from 'react';
import './AddItem.css';
class AddItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            setReminder: false,
        }
        this.onSubmit = this.onSubmit.bind(this);    
    }

    setReminder = (title) => {
        setTimeout(() => {
            alert(title)
        });
    }

    onSubmit(event){
        event.preventDefault();
        this.props.onAdd(this.titleInput.value, this.descInput.value);
        if (this.state.setReminder === true) {
            this.setReminder(this.titleInput.value);
        }
        this.titleInput.value= "";
        this.descInput.value="";
    }
    
    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <h3>Add new task</h3>
                
                <div className="input-group">
                <div className="input-group-prepend">
                <input placeholder="Title" className="form-control" ref={titleInput => this.titleInput = titleInput} />
                </div>
                </div>

                <div className="input-group">
                <div className="input-group-prepend">                
                <input className="form-control"  placeholder="description" ref={descInput => this.descInput = descInput}/>
                </div>
                </div>

                <div className="input-group">
                <div className="input-group-prepend">     
                </div>
                </div>

                <div className="reminderCheckbox">
                    <input type="checkbox" onClick={() => this.setState(prevState => ({ setReminder: !prevState.setReminder }))} />
                    <label>Set Reminder</label>
                </div>
                
                <button className="btn btn-success">Add</button>
                <hr /> 
                </form>
        );
    }
}

export default AddItem;