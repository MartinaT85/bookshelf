// 🐨 you'll need to import react and createRoot from react-dom up here
// 🐨 you'll also need to import the Logo component from './components/logo'
import * as React from 'react'
import {Logo} from './components/logo'
import {createRoot} from 'react-dom/client'
import {Dialog} from '@reach/dialog'
import {useState} from 'react'
import '@reach/dialog/styles.css'

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked

function LoginForm({onSubmit, buttonTxt}) {
  const handleSubmit = e => {
    e.preventDefault()
    const {username, password} = e.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <div>
        <button type="submit">{buttonTxt}</button>
      </div>
    </form>
  )
}

const App = () => {
  const [openModal, setOpenModal] = useState('none')

  const login = formData => {
    console.log('login', formData)
  }

  const register = formData => {
    console.log('register', formData)
  }

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div className="btn-container">
        <button type="button" onClick={() => setOpenModal('login')}>
          Log in
        </button>
        <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
          <h3>Log in Form</h3>
          <button type="button" onClick={() => setOpenModal('none')}>
            close
          </button>
          <LoginForm onSubmit={login} buttonTxt="Login" />
        </Dialog>
        <button type="button" onClick={() => setOpenModal('register')}>
          Register
        </button>
        <Dialog
          aria-label="Registration form"
          isOpen={openModal === 'register'}
        >
          <h3>Register Form</h3>
          <button type="button" onClick={() => setOpenModal('none')}>
            Close
          </button>
          <LoginForm onSubmit={register} buttonTxt="Register" />
        </Dialog>
      </div>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
export {root}

// 🐨 use createRoot to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')
