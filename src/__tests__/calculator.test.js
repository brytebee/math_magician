import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Calculator from '../components/calculator';

afterEach(cleanup);

describe('Snapshot of Calculator component', () => {
  it('Screen displays the Calculator component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calculator />, div);
  });

  it('Take a snapshot of the Calculator component', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
