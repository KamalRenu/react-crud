import React from 'react'
import { useFormik } from 'formik';

function ProductCreate() {

    const formik = useFormik({
        initialValues: {
            prName: "",
            model: "",
            company: "",
            sno: 0,
            mdate: "",
            price: ""
        },
        onSubmit: async values => {
            try {
                await fetch("https://619a30ba9022ea0017a7b085.mockapi.io/project2",{
                    method : "POST",
                    body : JSON.stringify(values),
                    headers : {
                        "content-type" : "application/json"
                    }
                })
            } catch (error) {
                console.log(error);
            }
        }
    })
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Create Product</h1>
            </div>
            <div className='container'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='row'>
                    <div className='col-lg-6'>
                            <label>Product Name</label>
                            <input type="text" className='form-control' name='prName' onChange={formik.handleChange} value={formik.values.name} />
                        </div>
                        <div className='col-lg-6'>
                            <label>Model</label>
                            <input type="text" className='form-control' name='model' onChange={formik.handleChange} value={formik.values.position} />
                        </div>
                        <div className='col-lg-4'>
                            <label>Company</label>
                            <input type="text" className='form-control' name='company' onChange={formik.handleChange} value={formik.values.office} />
                        </div>
                        <div className='col-lg-4'>
                            <label>Serial No</label>
                            <input type="number" className='form-control' name='sno' onChange={formik.handleChange} value={formik.values.age} />
                        </div>
                        <div className='col-lg-4'>
                            <label>Manufacturing date</label>
                            <input type="date" className='form-control' name='mdate' onChange={formik.handleChange} value={formik.values.startDate} />
                        </div>
                        <div className='col-lg-12'>
                            <label>Price</label>
                            <input type="text" className='form-control' name='price' onChange={formik.handleChange} value={formik.values.salary} />
                        </div>
                        <div className='col-lg-3'>
                            <input type="submit" className='btn btn-primary' />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ProductCreate