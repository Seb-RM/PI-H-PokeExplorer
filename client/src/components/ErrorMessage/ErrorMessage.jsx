import PropTypes from "prop-types";
import okIcon from "../../assets/icons/thumbs-up-solid.svg";
import errorIcon from "../../assets/icons/xmark-solid.svg";
import defaultIcon from "../../assets/icons/asterisk-solid.svg";
import "./ErrorMessage.css"

const ErrorMessage = ({ errors }) => {

  let iconSource;
  if (errors.tipo === "default") {
    iconSource = defaultIcon;
  } else if (errors.tipo === "error") {
    iconSource = errorIcon;
  } else {
    iconSource = okIcon;
  }
  return (
    <div className={errors.tipo}>
      <img src={iconSource} alt={`${errors.icon}`} className="error-icon"/>
      <p className="text">{errors.message}</p>
    </div>
  );
};

ErrorMessage.propTypes = {
  errors: PropTypes.object.isRequired,
};
export default ErrorMessage;
