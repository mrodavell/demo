import { Alert, View } from 'react-native'
import React from 'react'
import { Button, Divider, TextInput, Text, IconButton, ActivityIndicator } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { supabase } from '../../../lib/supabase'

const Home = () => {

  const [todoList, setTodoList] = React.useState([])
  const [todo, setTodo] = React.useState('')
  const [submitting, setSubmitting] = React.useState(false)
  const [fetching, setFetching] = React.useState(false)
  const [updating, setUpdating] = React.useState(false)
  const [action, setAction] = React.useState('add')
  const [selectedTodo, setSelectedTodo] = React.useState(null)

  const addOrEditTodo = async () => {
    try{
      setSubmitting(true);
      
      if(!todo){
        throw new Error('Enter TODO task');
      }

      if(action === 'edit'){
        const { error } = await supabase
        .from('todos')
        .update({ todo: todo })
        .eq('id', selectedTodo.id);  

        if(error){
          throw error;
        }
       
      }else{
        const { error } = await supabase
        .from('todos')
        .insert({ todo: todo });
        
        if(error){
          throw error;
        }  
      }  

      Alert.alert('Success', 'Todo added successfully', [{text: 'OK'}]);
      getTodos();
    }catch(error){
      Alert.alert('Error', error.message, [{text: 'OK'}]);
    } finally{
      setSubmitting(false);
      handleCancel();
    }
  }

  const getTodos = async () => {
    try{
      setFetching(true);

      const { data, error } = await supabase
      .from('todos')
      .select().order('id', { ascending: true });

      if(error){
        throw error;
      }

      setTodoList(data);
    }catch(error){
      Alert.alert('Error', error.message, [{text: 'OK'}]);
    } finally{
      setFetching(false);
    }
  }

  const toggleStatus = async (id, status) => {
    try{
      setUpdating(true);

      const { error } = await supabase.from('todos').update({ status: !status }).eq('id', id);

      if(error){
        throw error;
      } 

      getTodos();

    }catch(error){
      Alert.alert('Error', error.message, [{text: 'OK'}]);
    } finally{
      setUpdating(false);
    }
  }

  const deleteTodo = async (id) => {
    try{
      const { error } = await supabase.from('todos').delete().eq('id', id);

      if(error){
        throw error;
      }

      getTodos();
    }catch(error){
      Alert.alert('Error', error.message, [{text: 'OK'}]);
    }
  }

  const toggleEditAction = async (item) => {
     setAction('edit');
     setSelectedTodo(item);
     setTodo(item.todo);
  }

  const handleCancel = () => {
    setAction('add');
    setTodo('');
    setSelectedTodo(null);
  }

  React.useEffect(() => {
    getTodos();
  },[])

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 10, marginTop: 10, gap: 5}}>
      <TextInput
        value={todo} 
        onChangeText={text => setTodo(text)}
        placeholder='Enter todo'        
      /> 
        <Button 
          mode='contained' 
          onPress={() => addOrEditTodo()} 
          loading={submitting} 
          disabled={submitting}
        >
          {action === 'add' ? 'Add' : 'Update'}
        </Button>
        {action === 'edit' && 
          <Button onPress={() => handleCancel()}>Cancel</Button>
        }  
      <Divider style={{ marginVertical: 10, height: 1.5}} />
      <View style={{flex: 1, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'transparent'}}>
        <Text variant='titleMedium'>List of TODO's</Text>
        {fetching && <View style={{ flex: 1 }}><ActivityIndicator animating={true} size={40} /></View> }
        {!fetching && 
            <FlatList 
              data={todoList}
              renderItem={({ item }) => (
                <View 
                  style={{ 
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    marginVertical: 5,
                    alignItems: 'center',
                    flex: 1
                  }}
                >
                  <IconButton 
                    loading={updating}
                    onPress={() => toggleStatus(item.id, item.status)}
                    icon={item.status ? 'check' : 'checkbox-blank-circle'} 
                    size={16} 
                    iconColor={item.status ? 'green' : 'gray'}
                  />
                  <Text style={{ width: '50%', fontSize: 14, marginLeft: 10, textDecorationLine: item.status ? 'line-through' : 'none'}}>{item.todo}</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'center' }}> 
                    <Button  labelStyle={{ fontSize: 14 }} mode='text' onPress={() => toggleEditAction(item)}>
                      <MaterialCommunityIcons name='pencil' size={20} color='primary' />
                    </Button>
                    <Button labelStyle={{ fontSize: 14 }} mode='text' onPress={() => deleteTodo(item.id)}>
                      <MaterialCommunityIcons name='delete' size={20} color='red' />
                    </Button>
                  </View>             
                </View>
              )}
          />
        }    
      </View>
    </SafeAreaView>
  )
}

export default Home