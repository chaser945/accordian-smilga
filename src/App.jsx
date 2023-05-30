import React from "react"
import Question from "./components/Question.jsx"
import questionData from "./data.jsx"

export function App() {
  return (
    <div className="App">
      <main>
        <section className="container">
          <h1 className="title">Questions</h1>
          {questionData.map((question) => {
            return <Question key={question.id} {...question} />
          })}
        </section>
      </main>
    </div>
  )
}

export default App
