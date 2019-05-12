import { Greeting } from '@/scripts/js/Greeting'
import { str } from '@/scripts/ts/string'

import '@/assets/css/style.css'

(() => {
  console.log('str: ', str)
  
  const greeting = new Greeting('Caroline')
  greeting.sayHi();
})()