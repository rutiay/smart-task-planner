// import styles from './Header.module.css';

const Header = ({user}) => {
  return (
    <div>
      <header>
        <h1>Hello, {user.name}</h1>
      </header>
    </div>
  )
}

export default Header