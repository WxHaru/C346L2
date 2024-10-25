import React from 'react';
import { View, Text, Image} from 'react-native';
import Movie from './components/Movie';

const AllMovies = () => {
  return (
      <View>
          <Text></Text>
          <Text></Text>
          <Movie
              title="Doctor Sleep"
              year={2019}
              icon_name="paw"
              poster={require('./img/doctor-sleep.jpg')}
          />
          <Text></Text>
          <Text></Text>
          <Movie
              title="Midway"
              year={2020}
              icon_name="paw"
              poster={require('./img/midway.jpg')}
          />
      </View>
  );
};

export default AllMovies
