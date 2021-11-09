import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
        
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary); 
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state;
        return(
            <div className="app-add-form">
                <h3>Přidejte nového zaměstnance</h3>
                <form onSubmit = {this.onSubmit}
                    className="add-form d-flex">
                    <input type="text" 
                        required
                        className="form-control new-post-label"
                        placeholder="Jak se jmenuje?" 
                        onChange={this.onValueChange}
                        name='name'
                        value={name}/>
                    <input type="number" 
                        required
                        className="form-control new-post-label"
                        placeholder="Mzda v $?" 
                        onChange={this.onValueChange}
                        name='salary'
                        value={salary}/>
                    <button type="submit"
                        className="btn btn-outline-light">Přidat</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;