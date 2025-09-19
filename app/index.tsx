import {TextInput,KeyboardAvoidingView,View,Text,StyleSheet,Platform,Button,Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React ,{ useState,useEffect } from 'react';
import uuid from 'react-native-uuid';



const departaments={
	infantil:["Sala 22","Sala 23" ,"Sala 24","Sala 25","Sala 26","Sala 27","Sala 28","Sala 30","Sala 31","Sala 32","Sala 33"]
	Medio: ["Sala 18","Sala 19", "Sala 20","Sala 21"]
	Fund1:["Sala 1","Sala 2","Sala 3","Sala 4","Sala 5","Sala 6"],
	Fund2:["Sala 7","Sala 8","Sala 9","Sala 10","Sala 11","Sala 12","Sala 13","Sala 14","Sala 15","Sala 16","Sala 17"],
	Adm:["RH","Financeiro","Secretaria","Grafica"]
}
const communication = ["Chat","Pessoalmente","Radio"]


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

const send = async () => {
	try{
	 const response = await fetch(,{
				headers:{
					"Content-Type":"application/json"
					},
				method:'post',
				body:JSON.stringify(call),
	}
			     )}catch(error){
		console.log(error);
	}
}


useEffect(()=>{
	if(title !== ''){
		send();
	}
},[dateStart,title]);

useEffect(()=>{
	if(dateFinal !== ''){
		send();
		setDateFinal('');
		setDateStart('');
		setTitle('');
	}
},[dateFinal]);



const startCall = () => {
	 setTitle(()=>{return uuid.v4()});
	 setDateStart(`${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`)

}
	return(	
       <KeyboardAvoidingView style={{flex:1}}>

       <View style={{flex:1,justifyContent:'center',alignItems:'center',width:'100%'}}>
       <View style={{flexDirection:'row'}}>
       <View style={styles.ContainerOptions}>
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
       <Picker>
       {communication.map((a)=>(<Picker.Item value={a} key={a} label={a} />))}
       </Picker>
       </View>
       </View>
       </View>
       <View style={styles.containerButtons}>
       
       <View style={{margin:2}}>
       <Button title={"iniciar"} onPress={()=>{
	       if(call.title === ''){
	       startCall()
	       }
       }}></Button>
       </View>
       <View style={{margin:2}}>
       <Button title={"concluir"} onPress={()=>{
	       Alert.alert("Finalizar chamado","Você deseja finalizar chamdo agora",
		       [
			       {
				       text:"cancelar",
				       style:"cancel",
			       },{
				       text:"Confirmar",
				       onPress:()=> setDateFinal(`${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`),
			       }
		       ]
			  ); 
       }}></Button>
       </View>
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
		flexDirection:'column'
	},
	Texto:{ 
		margin:2,
		borderWidth:1,
		borderRadius:15,
		width:200
	},
	Selectors:{
		borderRadius:10,
		margin:0,
		borderWidth:1,
		width:180,
		justifyContent:'center',
	},
	containerButtons:{
		margin:1,
		justifyContent:'center',
		alignItems:'flex-start',
		flexDirection:'row',
	}
});
