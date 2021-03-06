import '../style/ComponentsCss/Buttons.css'

export default props => {
  
  let classes = 'button '
  // increment in className if the button has 
  // operation
  // in your proprities
  classes += props.operation ? 'operation' : '' 
  // increment in className if the button has 
  // twoCol
  // in your proprities
  classes += props.twoCol ? 'twoCol' : ''
  // increment in className if the button has 
  // threeCol
  // in your proprities
  classes += props.threeCol ? 'threeCol' : ''

  return(
    <button 
    onClick={e => props.click && props.click(props.value)}
    // onClick={() => console.log(props.value)}
    className={classes}>
      {props.value}
    </button>
  )
}