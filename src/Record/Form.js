import React, { Component } from 'react';
class Form extends Component {
    state={
       
        name:'',
        place:'',
        phone:'',
        error:{

        }
        
    }
    handleChange=(e)=>{
      //  e=event parameter  yo cahe user ley j  type garxa teslai ligxam through event parameter
    //console.log(e.target)//jun elemet target gareyxam tyo dine vayo
    //console.log(e.target.value)//j value type gareyxa form ma tehi dine vayo
            this.setState({[e.target.name]:e.target.value})
           
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const {place,name,phone}=this.state

        if(name===""){
            return this.setState({error:{name:'enter name'}})
        }
        else if(place===""){
            return this.setState({error:{place:'enter place'}})

        }
        else if(phone===""){
            return this.setState({error:{phone:'enter phone'}})
        }
            

        this.props.form(this.state);
        this.setState({error:{},place:'',name:'',phone:''})

    

    }

    render() { 
        const {error}=this.state
        return ( 
            <div>
                <div className="card w-50 mx-auto">
                    <div className="card-header " style={{backgroundColor:'green',color:'white'}}>Record form system</div>
                    <div className="card-body">
                       <form onSubmit={this.handleSubmit}>
                      
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
                            <label htmlFor="place">place:</label>
                            <input className='form-control'
                                onChange={this.handleChange}
                                value={this.state.place}
                                name="place"
                              type="text" placeholder="enter your place" id="place"/>

                                <span style={{color:'red'}}>{error.place}</span>

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
                        <button type="submit" className='form-control' style={{backgroundColor:'blue',color:'white'}}>submit</button>
                       </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Form;