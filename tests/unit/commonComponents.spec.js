import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import TitleInput from '@/components/common/TitleInput'
import TextArea from '@/components/common/TextArea'
import SvgLoader from '@/components/common/SvgLoader'
import ImgButton from '@/components/common/ImgButton'
import CustomCheckbox from '@/components/common/CustomCheckbox'

const factory = (values, component) => {
	const wrapper = shallowMount(component, {
		propsData: values
	})
	return wrapper
}

describe('TitleInput', () => {
	it('component is visible', () => {
		const wrapper = factory({}, TitleInput)
		expect(wrapper.isVisible()).to.equal(true)
	})
	it('content prop is getting passed correctly', () => {
		const wrapper = factory({ content: 'teste' }, TitleInput)
		expect(wrapper.props().content).to.equal('teste')
	})
	it('renders the component correctly as an input', () => {
		const wrapper = factory({ content: 'teste' }, TitleInput)
		expect(wrapper.is('input')).to.equal(true)
	})
	it('renders the content correctly', () => {
		const wrapper = factory({ content: 'teste' }, TitleInput)
		expect(wrapper.find('.title-input').element.value).to.equal('teste')
	})
	it('gets focus if forceFocus is set to true', () => {
		const wrapper = factory({ forceFocus: true }, TitleInput)
		expect(wrapper.find('input').element).to.equal(document.activeElement)
	})
})

describe('TextArea', () => {
	it('component is visible', () => {
		const wrapper = factory({}, TextArea)
		expect(wrapper.isVisible()).to.equal(true)
	})
	it('content prop is getting passed correctly', () => {
		const wrapper = factory({ content: 'teste' }, TextArea)
		expect(wrapper.props().content).to.equal('teste')
	})
	it('renders the component correctly as an input', () => {
		const wrapper = factory({ content: 'teste' }, TextArea)
		expect(wrapper.is('textarea')).to.equal(true)
	})
	it('renders the content correctly', () => {
		const wrapper = factory({ content: 'teste' }, TextArea)
		expect(wrapper.find('.custom-text-area').element.value).to.equal('teste')
	})
})

describe('SvgLoader', () => {
	it('component is visible', () => {
		const wrapper = factory({ svgName: 'person' }, SvgLoader)
		expect(wrapper.isVisible()).to.equal(true)
	})
	it('receive props correctly', () => {
		/* it is not a very good idea doing tests this way ,
        since if one prop fails we dont know which one did ,
        but just for now i ll keep it like that */
		const props = {
			svgName: 'person',
			alt: 'teste',
			title: 'teste',
			classes: 'teste'
		}
		const wrapper = factory(props, SvgLoader)
		expect(wrapper.props().svgName).to.equal('person')
		expect(wrapper.props().alt).to.equal('teste')
		expect(wrapper.props().title).to.equal('teste')
		expect(wrapper.props().classes).to.equal('teste')
	})
	it('loads svg correctly', () => {
		const wrapper = factory({ svgName: 'person' }, SvgLoader)
		expect(wrapper.is('img')).to.equal(true)
	})

	describe('ImgButton', () => {
		it('component is visible', () => {
			const wrapper = factory({ hidden: false }, ImgButton)
			expect(wrapper.isVisible()).to.equal(true)
		})
		it('receives callback function', () => {
			const wrapper = factory({ clickCallback: () => {} }, ImgButton)
			expect(wrapper.props().clickCallback).to.be.a('function')
		})
		it('renders correctly as a button', () => {
			const wrapper = factory({ svgName: 'person' }, ImgButton)
			expect(wrapper.is('button')).to.equal(true)
		})
		it('contains the svg loader', () => {
			const wrapper = factory({ svgName: 'person' }, ImgButton)
			expect(wrapper.contains(SvgLoader)).to.equal(true)
		})
	})

	describe('CustomCheckbox', () => {
		it('component renders correctly', () => {
			const wrapper = factory({}, CustomCheckbox)
			expect(wrapper.is('label')).to.equal(true)
		})
		it('component is visible', () => {
			const wrapper = factory({}, CustomCheckbox)
			expect(wrapper.isVisible()).to.equal(true)
		})
		it('has an input type checkbox', () => {
			const wrapper = factory({}, CustomCheckbox)
			expect(wrapper.find('input').element.type).to.equal('checkbox')
		})
	})
})
