import {TextInput,KeyboardAvoidingView,View,Text,StyleSheet,Platform} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React ,{ useState } from 'react';




const departaments={
	Medio: ["Sala 25","Sala 22", "Sala 25"],
	Fund1:["Sala 1","Sala 2","Sala 3"],
	Fund2:["Sala 10","Sala 11","Sala 12"],
	Adm:["RH","Financeiro","Secretaria","Grafica"]
}


export default function Index(){
const [sector,setSector] = useState('');
const [sala,setSala] = useState('');


	return(	
       <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{flex:1}}>
       <View style={styles.ContainerMain}>
       <View >
       <Text>{`${sector} ${sala}`}</Text>
       <TextInput style={styles.Texto} placeholder="solicitante" value={()=>{}}></TextInput>
       <TextInput style={[styles.Texto,{height:100}]} textAlignVertical="top" placeholder="descrição" multiline={true}/>
       </View>


       <View>
       <View style={styles.Selectors}>
       <Picker selectedValue={sector} onValueChange={(itemValue)=>setSector(itemValue)}>
       {Object.keys(departaments).map((sala)=>(<Picker.Item value={sala} key={sala} label={sala}/>))}
       </Picker>

       {sector !== '' && (
	<>
	<Picker selectedValue={sector} onValueChange={(a)=>setSala(a)}>
	{departaments[sector].map((a)=>(<Picker.Item value={a} key={a} label={a} />))}
	</Picker>
       </>
       )}
       </View>
       </View>
       </View>
       </KeyboardAvoidingView>
      );}

const styles = StyleSheet.create({
	ContainerMain:{
		flex:1,
		width:"100%",
		alignItems:'center',
		justifyContent:'center',
		flexDirection:'row'
	},
	Texto:{ 
		margin:5,
		borderWidth:1,
		borderRadius:15,
		width:200
	},
	Selectors:{
		margin:0,
		borderWidth:1,
		width:180
	}
});
