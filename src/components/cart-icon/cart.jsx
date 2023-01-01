import { ReactComponent as ShoppingIcon } from '../../shopping-bag.svg';
import './cart.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contex';
export const CartIcon = () => {
    const { visible ,setVisible,itemsCounts:items } = useContext(CartContext);
    const changeCart = () => {
        const result =  visible ? false :  true;
        setVisible(result);
    }
        return(
            <div  onClick={changeCart} className="cart-icon-container">
                <ShoppingIcon className="shopping-icon" />
                <span className="item-count">{items}</span>
            </div>
            
        )
}