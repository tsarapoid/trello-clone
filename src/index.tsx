import { StrictMode } from "react"
import { render } from "react-dom"
import "./styles/index.css"
import { App } from "./App"

import { DndProvider } from "react-dnd"
import { HTML5Backend as Backend } from "react-dnd-html5-backend"
import { AppStateProvider } from "./state/AppStateContext"

render(
  <StrictMode>
    <DndProvider backend={Backend}>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </DndProvider>
  </StrictMode>,

  document.getElementById("root")
)
