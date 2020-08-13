import React from 'react';
import {Button, ThemeProvider} from 'react-native-elements';

class Buttons extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let {componentData} = this.props;
    return (
      <ThemeProvider>
        <Button
          type={componentData.buttonType}
          title={componentData.buttonName}
          onPress={() => this.props.bindValue(componentData.buttonAction)}
        />
      </ThemeProvider>
    );
  }
}

export default Buttons;
