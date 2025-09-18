import {TextInput,KeyboardAvoidingView,View,Text,StyleSheet,Platform,Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React ,{ useState } from 'react';
import uuid from 'react-native-uuid';



const departaments={
	Medio: ["Sala 25","Sala 22", "Sala 25"],
	Fund1:["Sala 1","Sala 2","Sala 3"],
	Fund2:["Sala 10","Sala 11","Sala 12"],
	Adm:["RH","Financeiro","Secretaria","Grafica"]
}


export default function Index(){
const [title,setTitle] = useState('')
const [sector,setSector] = useState('');
const [sala,setSala] = useState('');
const [solicitante,setSolicitante] = useState('');
const [description,setDescription] = useState('');
const [dateStart,setDateStart] = useState('');
const [dateFinal,setDateFinal] = useState('');

const call = {
	title:title,
	caller:solicitante,
	descricao:description,
	setor:sector,
	sala:sala,
	dateStart:dateStart,
	datafinal:dateFinal
}

const startCall = () => {
	 setTitle(()=>{return uuid.v4()});
	 setDateStart(`${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`)

}



	return(	
       <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{flex:1}}>
       

       <View style={styles.ContainerOptions}>
       

       <View >
       <Text>{`${call.title} ${call.setor} ${call.sala} ${call.dateStart}`}</Text>
       <TextInput style={styles.Texto} placeholder="solicitante" onChangeText={setSolicitante} value={solicitante}></TextInput>
       <TextInput onChangeText={setDescription} value={description} style={[styles.Texto,{height:100}]} textAlignVertical="top" placeholder="descrição" multiline={true}/>
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
       <View style={styles.containerButtons}>
       <Button title={"iniciar"} onPress={()=>{
	       if(call.title === ''){
	       startCall()
	       }
       }}></Button>

       <Button title={"concluir"} onPress={()=>{}}></Button>
       </View>
       </View>
       </KeyboardAvoidingView>
      );}

const styles = StyleSheet.create({
	containerMain:{
		flex:1,
	},
	ContainerOptions:{
		flex:1,
		width:"100%",
		alignItems:'center',
		justifyContent:'center',
		flexDirection:'center'
	},
	Texto:{ 
		margin:2,
		borderWidth:1,
		borderRadius:15,
		width:200
	},
	Selectors:{
		margin:0,
		borderWidth:1,
		width:180
	},
	containerButtons:{
		margin:5,
		justifyContent:'center',
		alignItems:'flex-start',
		flexDirection:'row',
	}
});
