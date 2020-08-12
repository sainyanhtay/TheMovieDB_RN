import React from 'react';
import {Button, ThemeProvider} from 'react-native-elements';

class Buttons extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let {component} = this.props;
    return (
      <ThemeProvider>
        <Button
          type={component.componentData.buttonType}
          title={component.componentData.buttonName}
          onPress={() =>
            this.props.bindValue(component.componentData.buttonAction)
          }
        />
      </ThemeProvider>
    );
  }
}

export default Buttons;
