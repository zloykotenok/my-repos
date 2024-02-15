import classes from '../../styles/MyInput.module.css'


const MyInput = (props) => {
  return (
    <input className={classes.myInput} {...props} />
  );
};
export default MyInput;