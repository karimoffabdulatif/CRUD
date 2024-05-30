import { useState } from 'react'
import './App.css'
import { nanoid } from 'nanoid'

const App =()=> {
    const [users, setUsers] = useState([])
    const [form, setForm] = useState({})
    const [search, setSearch] = useState ("")
    const handleChange =(event)=>{
        const {name, value} = event.target
        setForm({...form, [name]:value})
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        let id = nanoid()
        const payload =  {...form, id}
        users.push(payload)
        setUsers([...users])
        event.target.reset()
    }
    const deleteUsers =(id)=> {
        let new_users = users.filter (item => item.id != id)
        setUsers([...new_users])
    }
    
    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className='col-md-4'>
                   <div className='card-body'>
                   <form id='submit' onSubmit={handleSubmit}>
                        <input type="text" name='name' onChange={handleChange} required placeholder='Name' className='form-control my-2' />
                        <input type="number" name='age' onChange={handleChange} required placeholder='Age' className='form-control my-2' />
                        <input type="tell" name='phone' onChange={handleChange} required placeholder='Phone' className='form-control my-2' />
                        <input type="text" name='address' onChange={handleChange} required placeholder='Address' className='form-control my-2' />
                    </form>
                   </div>
                   <div className='card-footer'>
                    <button type='submit' form='submit' className='btn btn-success'>Add User</button>
                   </div>
                </div>
                <div className='col-md-8'>
                    <div className='row'>
                        
                        <div className='col-md-6'>
                            
                            <input type="text" placeholder='Search...' className='form-control mb-2' onChange={(e) => setSearch(e.target.value)} />
                        </div>
                    </div>
                    <table className='table table-bordered table-hover table-striped'>
                        <thead>
                            <tr>
                                <td>T/R</td>
                                <td>Name</td>
                                <td>Age</td>
                                <td>Phone</td>
                                <td>Address</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.filter((item)=>{
                                    if(item?.name?.toLowerCase().includes(search.toLocaleLowerCase())){
                                        return item 
                                    } else if(item?.age?.toLowerCase().includes(search.toLocaleLowerCase())){
                                        return item
                                    } else if(item?.phone?.toLowerCase().includes(search.toLocaleLowerCase())){
                                        return item
                                    } else if(item?.address?.toLowerCase().includes(search.toLocaleLowerCase())){
                                        return item
                                    }
                                }).map((item, index)=>{
                                    return <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className='btn btn-danger' onClick={()=>deleteUsers(item.id)}><i className="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
             
        </div>
    )
}

export default App