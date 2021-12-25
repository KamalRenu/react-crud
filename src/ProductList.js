import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProductList() {
    const[products,setUsers] = useState([])
    useEffect(async ()=>{
        try {
            let items = await fetch("https://619a30ba9022ea0017a7b085.mockapi.io/project2");
            let productData = await items.json()
            setUsers(productData)
        } catch (error) {
            console.log(error);
        }
    },[])
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Product List</h1>
                <Link to="/product-create" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Create Product</Link>
            </div>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Model</th>
                                    <th>Company</th>
                                    <th>Serial No</th>
                                    <th>Manufacturing date</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Model</th>
                                    <th>Company</th>
                                    <th>Serial No</th>
                                    <th>Manufacturing date</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    products.map((elem)=>{
                                        return <tr>
                                        <td>{elem.prName}</td>
                                        <td>{elem.model}</td>
                                        <td>{elem.company}</td>
                                        <td>{elem.sno}</td>
                                        <td>{elem.mdate}</td>
                                        <td>{elem.price}</td>
                                        <td>
                                            <Link to={`/product-edit/${elem.id}`}><button className='btn btn-primary btn-sm'>Edit</button></Link>
                                            <Link to={`/product-delete/${elem.id}`}><button className='btn btn-danger btn-sm'>Delete</button></Link>
                                        </td>
                                    </tr>
                                    })
                                }
                                </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList