import { useDispatch } from "react-redux";
import { weatherActions } from "../../store/reducer";
import { memo } from "react";

const Button = (props) => {
  const dispatch = useDispatch();

  const setWeather = (index) => {
    dispatch(weatherActions.setCurrentItem({ data: index }));
    dispatch(weatherActions.setShowTopFive({ data: false }));
  };

  const showTopFive = () => {
    dispatch(weatherActions.toggleTopFive());
  };

  return (
    <div className="buttons d-flex justify-content-end gap-2">
      {props.currentItem && (
        <div className="btn btn-primary mb-2" onClick={showTopFive}>
          {props.showTopFive ? "Show Top Five" : 'Go Back'}
        </div>
      )}
      {props.currentItem && (
        <div className="dropdown d-flex justify-content-end">
          <div
            className="btn btn-primary dropdown-toggle mb-2"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select time
          </div>
          <ul className="dropdown-menu">
            {props.cityDetails.map((item, index) => (
              <li key={index}>
                <div
                  className="dropdown-item"
                  onClick={() => setWeather(index)}
                >
                  {item.day + " " + item.time}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default memo(Button);
