import { useDispatch } from "react-redux";
import { weatherActions } from "../../store/reducer";
import { memo } from "react";
import React from "react";

const Button = (props) => {
  const dispatch = useDispatch();

  const setWeather = (index) => {
    dispatch(weatherActions.setCurrentItem({ data: index }));
    dispatch(weatherActions.setShowTopFive({ data: false }));
  };

  const showTopFive = (show) => {
    if (show) {
      dispatch(weatherActions.setShowTopFive({ data: show }));
      return;
    }
    dispatch(weatherActions.toggleTopFive());
  };

  return (
    <React.Fragment>
      {props.currentItem && (
        <React.Fragment>
          <div className="buttons d-flex justify-content-end gap-2">
            {props.showTopFive ? (
              <div
                className="btn btn-primary mb-2"
                onClick={() => showTopFive(false)}
              >
                Go Back
              </div>
            ) : (
              <div className="btn btn-primary mb-2" onClick={() => showTopFive(true)}>
                Show Top Five
              </div>
            )}
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
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default memo(Button);
