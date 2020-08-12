import React from 'react';
import {Button, ThemeProvider} from 'react-native-elements';

class Buttons extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider>
        <Button title="Hey!" />
      </ThemeProvider>
    );
  }
}

export default Buttons;
