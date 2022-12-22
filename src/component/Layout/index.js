import Header from '../Header'


const Layout = ({children}) => {
  return(
    <div className="App container">
        <Header/>
        <main>
        {children}
        </main>
   </div>
  )
}

export default Layout;