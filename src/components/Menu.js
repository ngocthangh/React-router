import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },{
        name: 'Về Chúng Tôi',
        to: '/about',
        exact: false
    },{
        name: 'Liên Hệ',
        to: '/contact',
        exact: false
    },{
        name: 'Sản Phẩm',
        to: '/products',
        exact: false
    },{
        name: 'Đăng Nhập',
        to: '/login',
        exact: false
    }
];

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
      <Route path={to} exact={activeOnlyWhenExact} children={({match}) => {
        var active = match ? 'active abc': '';
        return (
          <li className={active}>
            <Link to={to} className='my-link'>{label}</Link>
          </li>
        )
      }}/>
    )
  }

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">

            <ul className="nav navbar-nav">
              {/* <li className="active"> */}
                {/* <NavLink activeClassName='active' activeStyle={{backgroundColor: 'white', color: 'yellow'}} to='/' exact>Home</NavLink> */}
                {/* <MenuLink label='Home' to='/' activeOnlyWhenExact={true}/> */}
              {/* </li> */}
              {/* <li> */}
                {/* <NavLink activeClassName='active' activeStyle={{backgroundColor: 'white', color: 'yellow'}} to='/about'>About</NavLink> */}
                {/* <MenuLink label='About' to='/about' activeOnlyWhenExact={false}/> */}
              {/* </li> */}
              {/* <li> */}
                {/* <NavLink activeClassName='active' activeStyle={{backgroundColor: 'white', color: 'yellow'}} to='/contact'>Contact</NavLink> */}
                {/* <MenuLink label='Contact' to='/contact' activeOnlyWhenExact={false}/> */}
              {/* </li> */}
              {this.showMenu()}
            </ul>
          </nav>
        );
    }
    showMenu(){
        return (menus.map((item, index) => (
            <MenuLink key={index} label={item.name} to={item.to} activeOnlyWhenExact={item.exact}/>
        )))
    }
}

export default Menu;