import React from 'react';
import numeral from 'numeral';

class SliderInput extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.catchEnter = this.catchEnter.bind(this);
    this.handleSliderInputChange = this.handleSliderInputChange.bind(this);
    this.handleSliderInputUpdated = this.handleSliderInputUpdated.bind(this);
    this.handleSliderValueUpdated = this.handleSliderValueUpdated.bind(this);
    var value = props.value;

    this.state = {
      value: value,
      tmpValue: value,
      calloutPosition: undefined
    };
  }

  componentWillReceiveProps (nextProps) {
    var value = nextProps.value;
    if (value !== undefined && this.state.value === undefined) {
      var calloutPosition = this.getCalloutPosition(value);
      this.setState({
        value: nextProps.value,
        calloutPosition: calloutPosition
      });
    }
  }

  componentDidMount () {
    var value = parseInt(this.refs.slider.value);
    var calloutPosition = this.getCalloutPosition(value);
    this.setState({
      calloutPosition: calloutPosition
    });
  }

  getValue () {
    return Number(this.refs.slider.value);
  }

  getCalloutPosition (value) {
    value = parseInt(value);
    var sliderElement = this.refs.slider;
    var sliderWidthPx = sliderElement.offsetWidth;
    var sliderPadding = 9;
    sliderWidthPx -= sliderPadding * 2;
    var calloutPosition = ((value - this.props.min) / (this.props.max - this.props.min)) * sliderWidthPx + sliderPadding;
    return calloutPosition;
  }

  handleSliderValueUpdated () {
    var value = this.refs.slider.value;
    if (value < this.props.min) {
      value = this.props.min;
    }
    if (value > this.props.max) {
      value = this.props.max;
    }
    var calloutPosition = this.getCalloutPosition(value);
    this.setState({
      value: value,
      tmpValue: value,
      calloutPosition: calloutPosition
    }, () => {
      if (this.props.onChange) {
        this.props.onChange();
      }
    });
  }

  handleSliderInputChange () {
    var tmpValue = this.refs.slider_input.value;
    this.setState({
      tmpValue: tmpValue
    });
  }

  handleSliderInputUpdated () {
    var value = parseInt(this.refs.slider_input.value);
    if (value < this.props.min) {
      value = this.props.min;
    }
    if (value > this.props.max) {
      value = this.props.max;
    }
    var calloutPosition = this.getCalloutPosition(value);
    this.setState({
      value: value,
      tmpValue: value,
      calloutPosition: calloutPosition
    }, () => {
      if (this.props.onChange) {
        this.props.onChange();
      }
    });
  }

  catchEnter (event) {
    if (event.keyCode === 13) {
      this.handleSliderInputUpdated();
    }
  }

  render () {
    var sliderValue = (this.state.value === undefined ? this.props.min : this.state.value);
    var sliderDisplayValue = (sliderValue === this.state.tmpValue ? numeral(sliderValue).format('0,0') : this.state.tmpValue);
    return (
      <div className="slider">
        <div className="row row--spaced row--vertical-center">
          <div className="row__cell row__cell--fixed">{this.props.minText}</div>
          <div className="row__cell slider__input">
            <input ref="slider" type="range" min={this.props.min} max={this.props.max} step={this.props.step} value={sliderValue} onChange={this.handleSliderValueUpdated} />
            { this.state.calloutPosition !== undefined
              ? <div className="slider__input__callout">
                  <div className="slider__input__callout__container" style={{ left: (this.state.calloutPosition + 'px') }}>
                    <div className="slider__input__callout__container__label">
                      <input ref="slider_input" type="text" className="input--sm" value={sliderDisplayValue} onChange={this.handleSliderInputChange} onBlur={this.handleSliderInputUpdated} onKeyUp={this.catchEnter} />
                      <div className="slider__input__callout__container__label__arrow"></div>
                    </div>
                  </div>
                </div>
              : null
            }
          </div>
          <div className="row__cell row__cell--fixed">{this.props.maxText}</div>
        </div>
      </div>
    );
  }
}

SliderInput.propTypes = {
  min: React.PropTypes.number.isRequired,
  minText: React.PropTypes.string,
  max: React.PropTypes.number.isRequired,
  maxText: React.PropTypes.string,
  step: React.PropTypes.number.isRequired,
  value: React.PropTypes.number,
  onChange: React.PropTypes.func
};

export default SliderInput;
