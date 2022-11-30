import { useState, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"

function UserSearch() {
    const [text, setText] = useState('')

    const {users, searchUsers, clearUsersResults} = useContext(GithubContext)

    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text === '') {
            alert('Please enter something')
        } else {
            searchUsers(text)
            setText('')
        }

        setText('')

    }

    const handleClearUsers = () => {
        clearUsersResults()
    }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
    <form onSubmit={handleSubmit} className="form-control">
        <div className="relative">
            <input type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black" placeholder="Search" 
            value={text} onChange={handleChange} />
            <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">Go</button>
        </div>
    </form>
        </div>
        { users.length > 0 && (<div>
            <button onClick={handleClearUsers} className="btn btn-ghost btn-large">Clear</button>
        </div>)
        }
        
    </div>
  )
}

export default UserSearch