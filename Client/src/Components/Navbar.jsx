import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
        <ul>
            <li><Link to="/">Create User</Link></li>
            <li><Link to="/users">Users</Link></li>
        </ul>
    </div>
  )
}
