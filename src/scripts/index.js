import { Greeting } from '@/scripts/js/Greeting'
import { Person } from '@/scripts/ts/string'
import '@/assets/css/style.css'
;(() => {
  const person = new Person({
    name: 'Caroline',
    age: '21'
  })

  const greeting = new Greeting(person.getName())
  greeting.sayHi()
})()
