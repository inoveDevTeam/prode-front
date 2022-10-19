import { useContext } from "react"
import { AppContext } from "../appInfo"
import NavBar from "./NavBar"
import { Toaster } from "react-hot-toast"

function Structure({ children }) {
  const { state } = useContext(AppContext)
  const { mobile } = state
  return (
    <div>
      {mobile
        ?
        <>
          { children }
          < NavBar />
        </>
        :
        <>
          <NavBar />
          {children}
        </>
      }
      <Toaster 
           containerStyle={{
            top: '90px'
           }}
        />

    </div>
  )
}

export default Structure