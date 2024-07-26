import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { App } from '../App'


describe("App", () => {

	test('coin denominations can be supplied as a parameter', () => {
		const {container} = render(<App currency='usd' />)
		const coins = Array.from(container.getElementsByClassName('coins'))[0]
		expect(coins.innerHTML).toBe("1, 5, 10, 25")
	})
})