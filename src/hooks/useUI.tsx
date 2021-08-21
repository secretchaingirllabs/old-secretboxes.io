import React, { FC, useContext, useMemo } from 'react'

export type ModalViews = 'RequestSubmitted' | 'YesFeedback' | 'NoFeedback'
export type ToastType = 'success' | 'warning' | 'error' | 'info'
export interface Toast {
  id: string
  title: string
  body: string
  type?: ToastType
}
export interface State {
  displayModal: boolean
  modalView: ModalViews
}

const initialState: State = {
  displayModal: false,
  modalView: 'RequestSubmitted',
}

type Action =
  | { type: 'OPEN_MODAL' }
  | { type: 'CLOSE_MODAL' }
  | { type: 'SET_MODAL_VIEW'; view: ModalViews }

export const UIContext = React.createContext(initialState as any)

UIContext.displayName = 'UIContext'

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        displayModal: true,
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        displayModal: false,
      }
    case 'SET_MODAL_VIEW':
      return {
        ...state,
        modalView: action.view,
      }
    default:
      return state
  }
}

export interface UIContextType extends State {
  openModal: (view: ModalViews) => void
  closeModal: () => void
  toggleModal: (view: ModalViews) => void
}
export const UIProvider: FC = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState)

  const openModal = (view: ModalViews) => {
    dispatch({ type: 'OPEN_MODAL' })
    dispatch({ type: 'SET_MODAL_VIEW', view })
  }
  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' })
  const toggleModal = (view: ModalViews) =>
    state.displayModal ? closeModal() : openModal(view)

  const value: UIContextType = useMemo(() => {
    return {
      ...state,
      closeModal,
      toggleModal,
      openModal,
    }
  }, [state])

  return <UIContext.Provider value={value} {...props} />
}

export const useUI = () => {
  const context = useContext<UIContextType>(UIContext)
  if (context === undefined) throw new Error(`useUI not within a UIProvider`)
  return context
}
