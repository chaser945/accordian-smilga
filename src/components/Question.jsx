import { useState } from "react"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { AiOutlineMinusCircle } from "react-icons/ai"

const question = ({ id, title, info }) => {
  const [hiddenAns, setHiddenAns] = useState(true)
  return (
    <article className="question-card">
      <header className="question-card-header">
        <h2 className="question-title">{title}</h2>
        <button onClick={() => setHiddenAns(!hiddenAns)} className="toggle-btn">
          {hiddenAns ? (
            <AiOutlinePlusCircle className="toggle-icon" />
          ) : (
            <AiOutlineMinusCircle className="toggle-icon" />
          )}
        </button>
      </header>
      {!hiddenAns && <p>{info}</p>}
    </article>
  )
}

export default question
