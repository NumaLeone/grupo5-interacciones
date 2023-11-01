import addToCart from '../../icons/AddToCart.svg'
const AddToCartButton = ()=>{
return (
    <>
        <button className='rounded-full bg-primary-100'>
            <img className="p-0.5" src={addToCart}/>
        </button>
    </>
)

}

export default AddToCartButton;

