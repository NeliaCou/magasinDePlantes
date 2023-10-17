function Cart (){
    const mahdiPrice = 100;
    const nassimePrice = 100;
    const mathieuPrice = 100;

    return(
        <>
        <h2>Panier</h2>
        <ul>
        <li>Mahdi : {mahdiPrice} €</li>
        <li>Nassime : {nassimePrice} €</li>
        <li>Mathieu : {mathieuPrice} €</li>
        </ul>
        Total : {mahdiPrice + nassimePrice + mahdiPrice} €
        </>
    )
}
export default Cart;