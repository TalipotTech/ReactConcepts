import { NavLink, Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">My Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/orders" style={({ isActive }) => isActive ? { color: 'red' } : undefined}
  end
>Past Orders</NavLink>
            </li>
            <li>
              <NavLink to="/orders/details">Order Details</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Root;
