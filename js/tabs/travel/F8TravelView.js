/**
 * Copyright 2016 Facebook, Inc.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to
 * use, copy, modify, and distribute this software in source code or binary
 * form for use in connection with the web services and APIs provided by
 * Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use
 * of this software is subject to the Facebook Developer Principles and
 * Policies [http://developers.facebook.com/policy/]. This copyright notice
 * shall be included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE
 *
 * @providesModule F8TravelView
 * @flow
 */
'use strict';

var ActionSheetIOS = require('ActionSheetIOS');
var F8Button = require('F8Button');
var PureListView = require('../../common/PureListView');
var ItemsWithSeparator = require('../../common/ItemsWithSeparator');
var Linking = require('Linking');
var Platform = require('Platform');
var ListContainer = require('ListContainer');
var MapView = require('../../common/MapView');
var React = require('React');
var StyleSheet = require('F8StyleSheet');
var View = require('View');
var { connect } = require('react-redux');
var { Text } = require('F8Text');
var F8Colors = require('F8Colors');

type Props = {
  departure: string;
  arrival: string;
  flightNumber: string;
  departureTime: string;
};

class F8TravelView extends React.Component {
  constructor() {
    super();

  }

  render() {
    const {map1, map2} = this.props;

    return (
      <View style={styles.container}>
        <ListContainer
          title="Travel"
          backgroundImage={require('./img/info-background.png')}
          backgroundColor={'#9176D2'}>
          <PureListView
            title="BNE"
            renderEmptyList={() => <ItemsWithSeparator style={styles.move}>
              <Row label="Departure" value={this.props.departure} />
              <Row label="Arrival" value={this.props.arrival} />
              <Row label="Flight Number" value={this.props.flightNumber} />
              <Row label="Departure Time" value={this.props.departureTime} />
            </ItemsWithSeparator>}
          />
          <PureListView
            title="Syd"
            renderEmptyList={() => <ItemsWithSeparator style={styles.move}>
              <Row label="Departure" value={this.props.arrival} />
              <Row label="Arrival" value={this.props.arrival} />
              <Row label="Flight Number" value={this.props.flightNumber} />
              <Row label="Departure Time" value={this.props.departureTime} />
            </ItemsWithSeparator>}
          />
          <PureListView
            title="Mel"
            renderEmptyList={() => <ItemsWithSeparator style={styles.move}>
              <Row label="Departure" value={this.props.arrival} />
              <Row label="Arrival" value={this.props.arrival} />
              <Row label="Flight Number" value={this.props.flightNumber} />
              <Row label="Departure Time" value={this.props.departureTime} />
            </ItemsWithSeparator>}
          />
          <PureListView
            title="Per"
            renderEmptyList={() => <ItemsWithSeparator style={styles.move}>
              <Row label="Departure" value={this.props.arrival} />
              <Row label="Arrival" value={this.props.arrival} />
              <Row label="Flight Number" value={this.props.flightNumber} />
              <Row label="Departure Time" value={this.props.departureTime} />
            </ItemsWithSeparator>}
          />
        </ListContainer>
      </View>
    );
  }
}

class Row extends React.Component {
  props: {
    label: string;
    value: string;
  };

  render() {
    return (
      <View style={styles.row}>
        <Text style={styles.label}>
          {this.props.label.toUpperCase()}
        </Text>
        <Text style={styles.value}>
          {this.props.value}
        </Text>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  label: {
    fontSize: 15,
    color: F8Colors.lightText,
  },
  value: {
    fontSize: 15,
    color: '#002350',
  },
  button: {
    marginTop: 25,
    marginHorizontal: 20,
  },
  directionsButton: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    ios: {
      bottom: 49,
    },
    android: {
      bottom: 0,
    },
  },
  move: {
    paddingTop: 50,
    paddingHorizontal: 50,
    backgroundColor: 'white'
  }
});

function select(store) {
  return {
    map1: store.maps.find((map) => map.name === 'Overview'),
    map2: store.maps.find((map) => map.name === 'Developer Garage'),
  };
}

module.exports = connect(select)(F8TravelView);
