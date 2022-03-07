import {Button, Flex, ListItem, UnorderedList, Heading,Input, Center} from '@chakra-ui/react'
import { useState } from 'react';


export default function Home() {
  const [tasks, setTasks] =  useState(['Remove or Add'])
  const [item, setItem] = useState('')
  // const removeItem = (task) => {
  //   return task
  // }

  function removeItem(taskName: string){
    setTasks(tasks.filter((task) => {
      return task !== taskName
    })
    )
  } 

  function AddItem(){
    if(item != '' && !tasks.includes(item)){
      let temp =  tasks
      temp.push(item)
      setTasks(temp)
      setItem('')
    }
  } 

  return(
    <div>
      <Center >
        <Heading bg='tomato' h='100px' textAlign='center' pt='10' color='white' fontSize='2xl' width='100%' >SIMPLE TODO APP</Heading>
      </Center>
      <Flex justifyContent='center' alignItems='center' width='100%' height='100%' flexDirection='column' >
        <UnorderedList listStyleType='none' spacing={3}>
          {tasks.map((task) => {
            return(
              <ListItem key={task} >
                {task}
                <Button ml='10' textAlign='right' onClick={() => {removeItem(task)}}>
                  Remove Item
                </Button>
                </ListItem>
            )
          })}
        </UnorderedList>
        <Input placeholder='Item Name' my='10' width='50%' value={item} onChange={(e) => {
          setItem(e.target.value)
        }}></Input>
        <Button onClick={AddItem}>Add Item</Button>
      </Flex>
    </div>
  )
}
