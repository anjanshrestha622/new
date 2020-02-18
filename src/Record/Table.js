import React, { Component } from 'react';
import { toast } from 'react-toastify';
class Table extends Component {

  state={
    isEditing:false,
    id:'',
    name:'',
    phone:'',
    error:{

    }
    
  }

    handleDelete=(id)=>{
        this.props.delete(id);
        
    }

    handleEditdata=(record)=>{
      //console.log('edited')
      this.setState({isEditing:true, id:record.id,name:record.name,phone:record.phone})
    }

    handleChange=(e)=>{
      //  e=event parameter  yo cahe user ley j  type garxa teslai ligxam through event parameter
    //console.log(e.target)//jun elemet target gareyxam tyo dine vayo
    //console.log(e.target.value)//j value type gareyxa form ma tehi dine vayo
            this.setState({[e.target.name]:e.target.value})
           
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const {id,name,phone}=this.state

        if(id===""){
            return this.setState({error:{id:'enter id'}})
        }
        else if(name===""){
            return this.setState({error:{name:'enter name'}})

        }
        else if(phone===""){
            return this.setState({error:{phone:'enter phone'}});
        }


        let editedData={
          id,
          name,
          phone,
          // id:this.props.record.id
          
        }

        // this.props.form(this.state);
        this.props.edit(editedData);
        this.setState({error:{},isEditing:false})
        toast.success('Table edited')

    }

    


   render() {
     const {error}=this.state
     if(this.state.isEditing){
       return(
        <div>
        <div className="card w-50 mx-auto">
            <div className="card-header " style={{backgroundColor:'green',color:'white'}}>Edit table</div>
            <div className="card-body">
               <form onSubmit={this.handleSubmit}>
               <div className="form-group">
                    <label htmlFor="id">Id:</label>
                    <input className='form-control'
                        onChange={this.handleChange}
                        value={this.state.id}
                        name="id"
                      type="number" placeholder="enter your id" id="id"/>

                        <span style={{color:'red'}}>{error.id}</span>

                </div>

                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input className='form-control'
                    onChange={this.handleChange}
                    value={this.state.name}
                    name="name"
                     type="text" placeholder="enter your name" id="Name"/>
                     <span style={{color:'red'}}>{error.name}</span>

                </div>

                <div className="form-group">
                    <label htmlFor="phone">phone:</label>
                    <input className='form-control' 
                    onChange={this.handleChange}
                    value={this.state.phone}
                    name="phone"
                    type="number" placeholder="phone" id="phone"/>
                    <span style={{color:'red'}}>{error.phone}</span>

                </div>
                <button type="submit" className='form-control' style={{backgroundColor:'blue',color:'white'}}>edit</button>
               </form>
            </div>
        </div>
    </div>
       )
     } else{
      return ( 
        <div>
            <table className="table table-dark w-50 mx-auto">
<thead>
<tr>
  <th scope="col">id</th>
  <th scope="col">Name</th>
  <th scope="col">phone</th>
  
</tr>
</thead>
{this.props.record.map((record)=>{
  return(
    <tbody>
    <tr>
      
        <td>{record.id}</td>
        <td>{record.name}</td>
        <td>{record.phone}</td>
         <td><i onClick={()=>this.handleDelete(record.id)}//paramter yesai pass garna paina???
         className="fas fa-trash-alt "></i> 
         <i  onDoubleClick={()=>this.handleEditdata(record)}
         className="fas fa-edit ml-3"></i></td>
       
    </tr>
 
  </tbody>
  )
})}

</table>
        </div>
     )

     }
      
    }
}
 
export default Table;