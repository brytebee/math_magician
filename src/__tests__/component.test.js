import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Index from '../pages/Index';
import Calc from '../pages/Calc';
import Quotes from '../pages/Quotes';
import Error from '../pages/Error';
import Footer from '../components/Footer';

afterEach(cleanup);

describe('Snapshot of Calculator component', () => {
  it('Renders the Index page', () => {
    const tree = renderer.create(<Index />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders the Calc page', () => {
    const tree = renderer.create(<Calc />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders the Error page', () => {
    const tree = renderer.create(<Error />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders the Quotes page', () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders the Footer component', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
