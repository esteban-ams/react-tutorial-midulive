import { EVENTS } from "./consts.js"

export function navigate (href) {
    window.history.pushState({}, '', href)
    // crear evento personalizado
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)

  }

export function Link({ target, to, ...props}){
    const handlerClick = (event) => {

        const isMainEvent = event.button === 0
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target === '_self' || target === undefined

        if (isMainEvent && isManageableEvent && !isModifiedEvent) {
            event.preventDefault()
            navigate(to)
        }
    }


    return (
        <a onClick={handlerClick} href={to} target={target} {...props} />
    )
  }
