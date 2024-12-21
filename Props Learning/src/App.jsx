import Contact from './Contact'
import Joke from './Joke'

function App() {
  return(
    <>
    <Contact 
      img = "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
      name = "Mr. Whiskerson"
      phone = "(212) 555-1234"
      email = "mr.whiskaz@catnap.meow"
    />
    <Contact 
      img = "https://plus.unsplash.com/premium_photo-1673967831980-1d377baaded2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D"
      name = "Fluffykins"
      phone = "(212) 555-2345"
      email = "fluff@me.com"
    />
    {/* <Contact 
      img = "https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg"
      name = "Felix"
      phone = "(212) 555-4567"
      email = "thecat@hotmail.com"
    />
    <Contact 
      img = "https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_640.jpg"
      name = "Pumpkin"
      phone = "(0800) CAT KING"
      email = "pumpkin@scrimba.com"
    /> */}
    <Joke setup = "I got my daughter a fridge for her birthday." 
          Punchline = "I can't wait to see her face light up when she opens it."/>
    <Joke setup = "How did the hacker escape the police?" 
          Punchline = "He just ransomware!"/>
    <Joke setup = "Why don't pirates travel on mountain roads?" 
          Punchline = "Scurvy."/>
    <Joke setup = "Why do bees stay in the hive in the winter?" 
          Punchline = "Swarm."/>
    <Joke setup = "What's the best thing about Switzerland?" 
          Punchline = "I don't know, but the flag is a big plus!"/>
    </>
  )
        
}

export default App
