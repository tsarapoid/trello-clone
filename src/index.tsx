import { StrictMode } from "react"
import ReactDOM from "react-dom"
import "./styles/index.css"
import { App } from "./App"
import { AppStateProvider } from "./state/AppStateContext"

ReactDOM.render(
  <StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </StrictMode>,

  document.getElementById("root")
)
