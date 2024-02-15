import classes from '../../styles/MyButton.module.css';

const MyButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes.MyBtn}>
      {children}
    </button>
  );
};
export default MyButton;