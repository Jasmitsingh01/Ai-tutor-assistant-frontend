import { Outlet } from "react-router-dom"
import Header from "../../component/Header"
function Layout() {
  return (
    <main>
        <Header/>
        <section className="p-5  pt-[90px] ">
            <Outlet/>
        </section>
    </main>
  )
}

export default Layout