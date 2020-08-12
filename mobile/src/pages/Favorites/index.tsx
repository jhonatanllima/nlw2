import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import PageHeader from '../../components/PageHeader';
import {useFocusEffect} from '@react-navigation/native';

import TeacherItem, { Teacher } from '../../components/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';






function Favorites(){
  const [favorites, setFavorites] = useState([]);
    
      function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response =>{ // o storage do mobile só grava txt
          if (response) {
            const favoritedTeachers = JSON.parse(response);

          setFavorites(favoritedTeachers);// converteu a resposta de texto para json novamente             
          }
        });
    }
    useFocusEffect(() => {
      loadFavorites();
    });
 



  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys Favoritos" />

        <ScrollView
            style={styles.teacherList}
            contentContainerStyle={{
              paddingHorizontal: 16,
              paddingBottom: 24,
            }}
            >
            
            {favorites.map((teacher: Teacher) => {
              return(
                <TeacherItem 
                  key={teacher.id}
                  teacher={teacher}
                  favorited
                />
              )
            })}
        </ScrollView>
   </View>        
    
  );
}

export default Favorites;