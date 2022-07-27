import React from "react";
import Cart from "./Cart";
import NavBar from "./NavBar";
import {db} from './firebase-config'
import {collection ,deleteDoc , query , onSnapshot , addDoc  , doc, updateDoc, where} from "firebase/firestore";

class App extends React.Component{

  constructor(){
    super();
    this.state = {
        products : [],
        loading : true
    }
}

componentDidMount (){
    const prods = collection(db ,'products')
    const q = query(prods , where('price' , "==" , 999))
    onSnapshot(prods ,snapshot =>{
      /* snapshot.docs.map((doc)=>{
        console.log(doc.data());
      }); */
  
      const products = snapshot.docs.map((doc)=>{
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })
  
      this.setState({
        products,
        loading : false
      })
  
      })
}

increaseQty  = (product)=>{
    //console.log('this is the product' , product)

    const{products} = this.state
    const index = products.indexOf(product);
    
    const docRef = doc(db, 'products' , product.id);

    updateDoc(docRef , {
      qty : product.qty + 1
    })
    .then(()=>{
      console.log("product updated succesfully")
    })


}

decreaseQty  = (product)=>{
    //console.log('this is the product' , product)

    const{products} = this.state
    const index = products.indexOf(product);
    if(products[index].qty ==1)return

    const docRef = doc(db, 'products' , product.id);

    updateDoc(docRef , {
      qty : product.qty - 1
    })
    .then(()=>{
      console.log("product updated succesfully")
    })
    
}

deleteProduct = (id)=>{

    const{products} = this.state

    /* const items = products.filter((item)=> item.id !==id)

    this.setState({
        products:items
    }) */

    deleteDoc(doc(db, "products", id))
    .then(()=>{
      console.log('Product Deleted Successfully !!')
    })

}

itemCount = ()=>{
    const{products} = this.state

    let count=  0;

    products.forEach(element => {
      count += element.qty;
    });
    return count;
}

getTotal = ()=>{
  const{products} = this.state

  let count=  0;

  products.forEach(element => {
    count += element.price * element.qty;
  });
  return count;
}

addProduct = ()=>{

  addDoc(collection(db, "products"), {
    img :"https://cdn-icons-png.flaticon.com/512/2971/2971416.png",
    name: "mobile",
    price: 999,
    qty : 1
    
  }).then((docRef)=>{
      console.log('Product has been added' , docRef)
  })
  
}


  render(){

    const {products , loading} = this.state

    return (
      <div className="App">
      <NavBar count = {this.itemCount()} />
      {/* <button onClick={this.addProduct} style = {{padding:10  , margin:20}} >Add Product</button> */}
      <Cart products = {products}  increaseQty={this.increaseQty} decreaseQty={this.decreaseQty} deleteProduct={this.deleteProduct}/>
      {loading && <h1>Loading products....</h1>}
      <div style={{padding:20 , fontSize :30 , fontWeight: 900 }}>TOTAL : {this.getTotal()} INR</div>
      </div>
    );
  }
  }
export default App;
