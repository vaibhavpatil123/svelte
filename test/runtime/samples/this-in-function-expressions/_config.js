export default {
	async test({ assert, target, window }) {
		const [_, btn] = target.querySelectorAll('button');
		const clickEvent = new window.MouseEvent('click');

		await btn.dispatchEvent(clickEvent);

		assert.equal(btn.x, 1);
	}
};
