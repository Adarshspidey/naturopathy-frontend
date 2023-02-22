import React from 'react'

const Login = () => {
  return (
    <div>
      <form>
        <div>
          <label> Username:  
          <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label> Password:  
          <input type="password" name="password" />
          </label>
        </div>
      </form>
    </div>
  )
}

export default Login