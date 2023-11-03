"use client"
import React, {createContext, useState, useEffect} from 'react'


export const CartContext = createContext()

const CartProvider = ({children}) => {
    //cart open state
    const [isOpen, setIsOpen] = useState(false)
    
    //cart state
    const [cart, setCart] = useState([])

    // cart total state
    const [cartTotal, setCartTotal] = useState(0)

    // item amount state
    const [itemAmount, setItemAmount] = useState(0)

    //update item amount
    useEffect(() => {
        const amount = cart.reduce((a,c) => {
            return a + c.amount
        }, 0)
        setItemAmount(amount)
    })

    //update cart total price
    useEffect(() => {
        const price = cart.reduce((a,c) => {
            return a + Number(c.price) * c.amount
        }, 0)
        setCartTotal(price)
    }, [cart])

    //add to cart
    const addToCart = (
        id, 
        image, 
        name, 
        price, 
       
   
        
        ) => {
        
   

    const newItem = {
        id,image,name,price,amount:1
    }

    const cartItemIndex = cart.findIndex((item) => {
        return item.id === id &&
        item.price === price
    })

    if(cartItemIndex === -1) {
        setCart([...cart, newItem])

    }else {
        const newCart = [...cart]
        newCart[cartItemIndex].amount += 1
        setCart
    }

    setCart([...cart, newItem])

    //open the cart everytime you add a product

    setIsOpen(true)
    }

    //remove item
    const removeItem = (id, price) => {
        const itemIndex = cart.findIndex((item) => item.id === id && item.price === price
        )
        if(itemIndex !== -1 ){
            const newCart = [...cart]
            newCart.splice(itemIndex, 1)
            setCart(newCart)
        }
    }
    //increase ammount
    const increaseAmount = (id, price) => {
        const itemIndex = cart.findIndex((item) => item.id === id && item.price === price
        )
        if(itemIndex !== -1){
            const newCart = [...cart]
            newCart[itemIndex].amount += 1
            setCart(newCart)
        }
    }

    //decrease ammount
    const decreaseAmount = (id, price) => {
        const itemIndex = cart.findIndex((item) => item.id === id && item.price === price
        )
        if(itemIndex !== -1){
            const newCart = [...cart]
            if(newCart[itemIndex].amount > 1) {
                newCart[itemIndex].amount -= 1
            }
            setCart(newCart)
        }
    }
    
    return <CartContext.Provider value={{
        isOpen, 
        setIsOpen, 
        addToCart, 
        cart,
        setCart, 
        removeItem, 
        increaseAmount, 
        decreaseAmount,
        itemAmount,
        cartTotal,
        }}>
        {children}
    </CartContext.Provider>
}

export default CartProvider