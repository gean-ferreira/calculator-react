import '../style/ComponentsCss/Display.css'

const Display = props => {
  return(
    <>
      <div className="display">
        <div className="expression">12 + 12 = 24</div>
        <div className="inputValues">{props.value}</div>
      </div>
    </>
  )
}

export default Display;