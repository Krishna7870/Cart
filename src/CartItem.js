import React  from "react";

class CartItem extends React.Component{
    // constructor(){
    //     super();
    //     //creting the default state 
    //     this.state = {
    //         price: 999,
    //         title: 'Phone',
    //         qty: 1,
    //         img: ''
    //     }
    // }
    increaseQuantity = () =>{
        //console.log(this.state);

        //setState form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        //setState form 2 - If previous state required use this
        this.setState( (prevState) => {
            return{
            qty: prevState.qty + 1
            }
        }, () => {
            console.log('this.state', this.state);
        });
    }
    decreaseQuantity = () =>{
        //console.log(this.state);

        const { qty } = this.state;
        if(qty == 0){
            return;
        }

        //setState form 2 - If previous state required use this
        this.setState( (prevState) => {
            return{
            qty: prevState.qty - 1
            }
        }, () => {
            console.log('this.state', this.state);
        });
        
    }

    

    render(){
        console.log('this.props', this.props);
        const {price, title, qty} = this.props.product;  //object destructuring-It allows as to extract data from array,objects and map
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{this.props.title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                
                    <div className="cart-item-actions">
                    {/* Buttons */}
                    <img 
                    alt="increase" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png"
                    onClick={this.increaseQuantity}
                    />
                    <img 
                    alt="decrease" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
                    onClick={this.decreaseQuantity}
                    />
                    <img 
                    alt="delete" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                    />
                    </div>
            </div>
            </div>
        );
    }
}

const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        background: 'Red'
    }
}

export default CartItem;