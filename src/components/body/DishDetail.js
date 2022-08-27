import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import DishDetailComments from "./DishDetailComments";

const DishDetail = props => {


    return (
        <div>
            <Card style={{ marginTop: '10px' }}>
                <CardImg top src={props.dish.image} alt={props.dish.name}></CardImg>
                <CardBody style={{ textAlign: 'left' }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                    <CardText>
                        {props.dish.price}
                    </CardText>
                    <hr />
                    <DishDetailComments comments={props.dish.comments} />
                </CardBody>
            </Card>
        </div>
    );
}

export default DishDetail;