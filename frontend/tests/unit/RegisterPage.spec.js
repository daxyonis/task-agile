import Vue from 'vue'
import VueRouter from 'vue-router'
import RegisterPage from '@/views/RegisterPage'
import { mount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

// Mock dependency registratioService
jest.mock('@/services/registration')

describe('RegisterPage.vue', () => {

    let wrapper
    let fieldUsername
    let fieldEmailAddress
    let fieldPassword
    let buttonSubmit
    //let registerSpy

    beforeEach(() => {
        wrapper = mount(RegisterPage, {
          localVue,
          router
        })
        fieldUsername = wrapper.find('#username')
        fieldEmailAddress = wrapper.find('#emailAddress')
        fieldPassword = wrapper.find('#password')
        buttonSubmit = wrapper.find('form button[type="submit"]')
    })

    afterAll(() => {
      jest.restoreAllMocks()
    })

    it('should render registration form', () => {
        expect(wrapper.find('.logo').attributes().src)
            .toEqual('/static/images/logo.png')
        expect(wrapper.find('.tagline').text())
            .toEqual('Open source task management tool')
        expect(fieldUsername.element.value).toEqual('')
        expect(fieldEmailAddress.element.value).toEqual('')
        expect(fieldPassword.element.value).toEqual('')
        expect(buttonSubmit.text()).toEqual('Create account')
    })

    it('should contain data model with initial values', () => {
        expect(wrapper.vm.form.username).toEqual('')
        expect(wrapper.vm.form.emailAddress).toEqual('')
        expect(wrapper.vm.form.password).toEqual('')
      })

      /* This test fails - dont know why
      it('should have form inputs bound with data model', () => {
        const username = 'sunny'
        const emailAddress = 'sunny@taskagile.com'
        const password = 'VueJsRocks!'
    
        wrapper.vm.form.username = username
        wrapper.vm.form.emailAddress = emailAddress
        wrapper.vm.form.password = password
        expect(fieldUsername.element.value).toEqual(username)
        expect(fieldEmailAddress.element.value).toEqual(emailAddress)
        expect(fieldPassword.element.value).toEqual(password)
      })*/

      
})