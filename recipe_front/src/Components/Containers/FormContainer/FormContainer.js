import React, {Components, Fragment} from 'react';
import {Form} from "../../Presentationals/index";
import axios from 'axios';

class Form extends Components {
    constructor(props) {
        super(props);
        this.state = {
            recipeName: '',
            recipeIngredients: '',
            recipeSteps: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8080/recipe', {
            name: this.state.recipeName,
            ingredients: this.state.recipeIngredients,
            steps: this.state.recipeSteps
        })
            .then((response) => {
                this.setState({
                    recipeName: '',
                    recipeIngredients: '',
                    recipeSteps: '',
                });
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Form
                    value={this.props.value}
                    onChange={this.handleInputChange}
                    submit={this.handleSubmit}
                />
            </Fragment>
        )
    }
}

export default Form;