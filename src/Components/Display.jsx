import '../style/ComponentsCss/Display.css'

const Display = props => {
  return(
    <>
      <div className="display">
        <div className="inputValues">{props.value}</div>
      </div>
    </>
  )
}

export default Display;