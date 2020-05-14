import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Tabs from './Tabs';

describe(`Tabs Component`, () => {
  // array of objects, each with a name and content
  const tabsProp = [/* ... */];

  /* smoke test not shown */

  it('renders the first tab by default', () => {
    const tree = renderer.create(<Tabs tabs={tabsProp} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})