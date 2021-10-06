import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import { Detalhes } from "../Detalhes";

export function Filmes(props){
    const[visibleModal, setVisibleModal] = useState(false);
  return (
    <View style={styles.card}>
        <Text style={styles.titulo}>Filme: {props.data.nome} </Text>

        <Image 
            source={ { uri: props.data.foto }}
            style={styles.capa}
        />

        <View style={styles.areaBtn}>
            <TouchableOpacity style={styles.botao} onPress={() => {setVisibleModal(true)}}>
                <Text style={styles.botaoTxt}>Leia mais</Text>
            </TouchableOpacity>
        </View>

        <Modal
            animationType="slide"
            visible={visibleModal}
            transparent
        >
            <Detalhes filme={props.data} voltar={() => setVisibleModal(false) }/>
        </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card:{ 
    backgroundColor:'#fff',
    margin: 15
  },

  capa:{
      height: 250,
      zIndex: 2
  },

  titulo: {
      padding: 15,
      fontSize: 18,
  },

  areaBtn:{
      alignItems: 'flex-end',
      marginTop: -45,
      zIndex: 9
  },

  botao: {
      width: 100,
      backgroundColor: '#09A6FF',
      opacity: 1,
      padding: 5,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5
  },

  botaoTxt: {
      color: '#fff',
      textAlign: 'center'
  }

})
