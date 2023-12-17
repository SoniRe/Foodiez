2:00:00

Redux is not mandatory for small or medium scale applications. All applications can be build without using Redux

 - Why we use Redux?
   Redux offers state management
   Redux offers easy debugging

New way of writing Redux is using Redux Toolkit

Part of redux store are slices which are small portion of redux store. Slices are based on logical seperations like Cart Slice,
User Slice, Theme Slice. Can't directly add Data to Cart Slice. We have to dispatch an action

Dispatching an Action - It calls a function and the function modifies the cart. This function is known as Reducer.

Read Data from Our Store - We use selector. This phenomena is known as subscribing to the store. 
Example - Header component is subscribed to the store meaning as soon as our store changes our Header component will be
updated

useSelector - For Subscribing data

useDispatch - To dispatch an action

In first one:

<button onClick={()=>handleClick()}>Add</button>
This is arrow function and it will trigger only onClick of the button.

In second one:

<button onClick={handleClick()}>Add</button>
This is a normal function call , which calls the method as soon the rendering of the component happens.

If we subscribe to wrong portion of the store there will be a huge performance loss

Example -> 
Subscribing to whole store Vs Subscribing to a portion of store

const store = useSelector((store) => store)
const cartItems = useSelector((store) => store.cart.items)

reducer - It refers to reducer for whole store 
reducers - These are small reducers created under slice

(Older Redux) Vanilla Redux - DON'T MUTATE STATE
Redux Toolkit - WE HAVE TO MUTATE THE STATE OR RETURN A NEW STATE

Earlier we used to use Redux Middleware and Thung