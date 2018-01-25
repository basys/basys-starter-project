import {Selector} from 'testcafe';

fixture('Home page').page('http://localhost:8080'); // BUG: retrieve url from configs

test('Default tests', async t => {
  await t
    .expect(Selector('div').exists).ok()
    .expect(Selector('div').innerText).contains('Hello world!');
});
