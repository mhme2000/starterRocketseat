import React, { Component } from 'react'
import api from '../../services/api'

export default class Main extends Component {
   state =  {
        products:[]
   }
   
   
    componentDidMount()  {
       this.loadProducts()
   }

   loadProducts = async() => {
       const response = await api.get('/products')
       
       console.log(response.data.docs)

       this.setState({ products : response.data.docs})
   }

    render(){
    return ( 
            <div className="productList">
                {this.state.products.map(products => { return (                
                <article key="{products._id}">
                    <strong>{products.title}</strong>
                    <p>{products.description}</p>
                    <a href="">Acessar</a>
                    </article>
                    )})}
            </div>
        )
} 
}