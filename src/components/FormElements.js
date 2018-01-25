import React from 'react';

export const Input = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className="form-control"
        {...props}
        />
    </div>
  );
};

export const TimeSelect = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12">
          <p className="mb-0">{props.title}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <div className="form-group">
            <select name={`${props.name}`} onChange={props.onSelectChange} className="form-control" data-unit="hours">
              {props.hours.map((hour, i) => {
                return <option key={i} value={hour}>{hour}</option>
              })}
            </select>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="form-group">
            <select name={`${props.name}`} onChange={props.onSelectChange} className="form-control" data-unit="minutes">
              {props.minutes.map((minute, i) => {
                return <option key={i} value={minute}>{minute}</option>
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};