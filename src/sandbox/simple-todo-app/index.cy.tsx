import { mount } from "@cypress/react"
import SimpleTodo from "."

describe('Simple Todo App', () => {
    it('Should render', () => {
        mount(<SimpleTodo/>)
    })
})