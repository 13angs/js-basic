import NxWelcome from './nx-welcome';
import Appbar from './appbar/appbar';
import {Common} from '@nxb/common';

export function App() {
  return (
    <>
      <Appbar/>
      <Common/>
      <NxWelcome title="Hello" />
      <div />
    </>
  );
}
export default App;
