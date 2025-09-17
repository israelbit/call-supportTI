import {TextInput,KeyboardAvoidingView,View,Text,StyleSheet,Platform} from 'react-native';


export default function Index(){
return(	
       <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{flex:1,justifyContent:'center', alignItems:'center'}}>
       <View style={styles.ContainerMain}>
       <View >
       <TextInput style={styles.Texto} placeholder="solicitante"></TextInput>
       <TextInput style={[styles.Texto,{height:100}]} textAlignVertical="top" placeholder="descrição" multiline={true}/>
       </View>

       <View>

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
	},
	Texto:{ 
		margin:5,
		borderWidth:1,
		borderRadius:15,
		width:200
	}
});
