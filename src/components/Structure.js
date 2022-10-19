import { useContext } from "react"
import { AppContext } from "../appInfo"
import { Toaster } from "react-hot-toast"
import NavBar from "./NavBar"

function Structure({ children, activo }) {
  const { state } = useContext(AppContext)
  const { mobile } = state
  return (
    <div>
      {mobile
        ?
        <>
          { children }
          < NavBar activo={activo} />
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