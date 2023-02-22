import React from 'react'

const UserRegister = () => {
  return (
    <div>
        <form>
            <div>
            <label> Name:  
             <input type="text" name="name" />
            </label>
            </div>
            
            <div></div>
            <label> Email:  
             <input type="text" name="name" />
            </label>
            <div>
            <label> Age:  
             <input type="number" name="Age" />
            </label>
            </div>
            
            <div>
            <label> Sex:  
             <input type="text" name="Sex" />
            </label>
            </div>
            
            <div>
            <label> Address:  
             <input type="textarea" name="Address" />
            </label>
            </div>
            
            <div>
            <label> Phone:  
             <input type="number" name="Phone" />
            </label>
            </div>
            <div>
            <label> Username:  
             <input type="text" name="Username" />
            </label>
            </div>
            
            <div>
            <label> Password:  
             <input type="password" name="password" />
            </label>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UserRegister