import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import I18n from './i18n/i18n';

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            stateOfLocale: 'en'
        };
    }

  render() {
        return (

          <View style={styles.container}>
              <Text>{I18n.t('welcomeCarousel')}</Text>
              <Text>{I18n.t('pass')}</Text>
              <Text>{I18n.t('childNameTitle')}</Text>
              <Text>{I18n.t('createAccount')}</Text>
              <Text>{I18n.t('forgot')}</Text>
              <Text>{I18n.t('privacy')}</Text>
              <Button
                  onPress={this.changeToFrench}
                  title="FR"
                  color="#841584"
                  accessibilityLabel="Français"
              />
              <Button
                  onPress={this.changeToEnglish}
                  title="EN"
                  color="#841584"
                  accessibilityLabel="English"
              />
          </View>
        );
    }

    changeToFrench = () => {
        this.setState({stateOfLocale: 'fr'});
        I18n.locale =  'fr';
    };

    changeToEnglish = () => {
        this.setState({stateOfLocale: 'en'});
        I18n.locale =  'en';
    };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
