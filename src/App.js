import React, { Component } from 'react';
import Navbar from './Record/Navbar';
import Form from './Record/Form';
import Table from './Record/Table';
import Swal from  'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class App extends Component {
  state = {  
    record:[
      {id:'1',name:'anjan',phone:'123'},
      {id:'2',name:'roshan',phone:'33333'},
      {id:'3',name:'sabin',phone:'5555'}
    ]
  };

  handleDeleted=(id)=>{
    let filterdata=this.state.record.filter((record)=>{
      
      return(record.id!==id)
    })
    // console.log(filterdata)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.setState({record:filterdata})
        toast.success('deleted sucessfully')
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }



  handleFormdata=(data)=>{
    // console.log(data)
    this.setState({record:[...this.state.record,data]})
  }

  handleEdittable=(editData)=>{
    // console.log(editdata)
    let edittable=this.state.record.map(function(record){
      if(editData.id===record.id){
        return editData;
      }
      return record;
    })
    console.log(edittable)
    this.setState({record:edittable})
  }

  render() { 
    return ( 
      <div>
        <Navbar title="Record management system"/>
        <Form form={this.handleFormdata}/>
        <Table record={this.state.record}
         delete={this.handleDeleted}
         edit={this.handleEdittable}
        
        />
        <ToastContainer />
      </div>
     );
  }
}
 
export default App;