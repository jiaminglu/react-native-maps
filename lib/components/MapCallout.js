import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import decorateMapComponent, {
  SUPPORTED,
  NOT_SUPPORTED,
} from './decorateMapComponent';

const propTypes = {
  ...View.propTypes,
  tooltip: PropTypes.bool,
  onPress: PropTypes.func,
};

const defaultProps = {
  tooltip: false,
};

class MapCallout extends React.Component {
  render() {
    const AIRMapCallout = this.getAirComponent();
    return <AIRMapCallout {...this.props} style={[styles.callout, this.props.style]} />;
  }
}

MapCallout.propTypes = propTypes;
MapCallout.defaultProps = defaultProps;

const styles = StyleSheet.create({
  callout: {
    position: 'absolute',
  },
});

module.exports = decorateMapComponent(MapCallout, {
  componentType: 'Callout',
  providers: {
    google: {
      ios: SUPPORTED,
      android: SUPPORTED,
    },
    amap: {
      ios: NOT_SUPPORTED,
      android: SUPPORTED,
    },
  },
});
