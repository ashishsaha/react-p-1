import React, { Component } from "react";
// Here we are import component cause we will create a class based component; cause we need to use state
import DISHES from "../../data/dishes";
import Menuitem from "./Menuitem";
import DishDetail from "./DishDetail";

class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null
    }

    // This is function - and if we click on the any dish then it will set dish value into the selectedDish sate instead of null
    onDishSelect = dish => {
        console.log(dish)
        this.setState({ selectedDish: dish })
    }

    render() {
        // Here we will map all dishes. And we are iterating each item and send to menuitem component as dish
        const menu = this.state.dishes.map(item => {
            return (
                <Menuitem
                    dish={item}
                    key={item.id}
                    DishSelect={() => this.onDishSelect(item)}
                />
            );
        })

        let disDetail = null;
        if (this.state.selectedDish != null) {
            disDetail = <DishDetail dish={this.state.selectedDish} />
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {disDetail}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;