import { render } from '@testing-library/react';

import Cms from './libCms';

describe('Cms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cms />);
    expect(baseElement).toBeTruthy();
  });
});
