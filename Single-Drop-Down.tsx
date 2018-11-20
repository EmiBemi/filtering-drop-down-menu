import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import styled from 'styled-components';

const Styled = styled('div')`
position: relative;
  /* width: 50%; */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: "2px";
  color: ${(p: Partial<Props>) => p.color};
  background-color: ${(p: Partial<Props>) => p.backgroundColor};
  border: ${(p: Partial<Props>) => p.border};
    `;


interface Props {
  text: string;
  color: string;
  backgroundColor: string;
  border: string;
  padding: string;
}

//   interface State {
//     selectedOption1: {value: string, label: string}
//   }

interface State {
  selectedOption1: string;
  selectedOption2: string;
}

export class Filter_Drop_Down_3 extends React.Component<Props, State> {
  private selectRef: React.RefObject<HTMLSelectElement>;

  constructor(props) {
    super(props);
    this.selectRef = React.createRef();
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.state = { selectedOption1: null, selectedOption2: null };
  }

  
  componentDidMount() {
    this.selectRef.current;
  }

  handleChange1(event) {
    console.log("handle change 1, event is ", event);
    this.setState({ selectedOption1: event.target.value || null });
  }

  handleChange2(event) {
    console.log("handle change 2, event is ", event);
    this.setState({ selectedOption2: event.target.value || null });
  }

  // Set default properties
  static defaultProps = {
    text: "Hello World!",
    color: "black",
    backgroundColor: "grey",
    padding: "1 rem"

  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Text" }
  };

  render() {
    const options1 = [
      { value: "", label: "Default" },
      { value: "one", label: "One" },
      { value: "two", label: "Two" }
    ];

    const options2 = [
      { value: "", label: "Default" },
      { value: "one-a", label: "One A", link: "one" },
      { value: "one-b", label: "One B", link: "one" },
      { value: "two-a", label: "Two A", link: "two" },
      { value: "two-b", label: "Two B", link: "two" }
    ];

    const filteredOptions = options2.filter(
      o => o.link === this.state.selectedOption1
    );

    return (
      <Styled
          color={this.props.color}
          backgroundColor={this.props.backgroundColor}
          >
        <div>
          <label>Select This</label>
          <select
            name="form-field-name"
            value={this.state.selectedOption1 || ""}
            onChange={this.handleChange1}
          >
            {/* <option value="" disabled /> */}
            {options1.map(tag => (
              <option>{tag.value}</option>
            ))}
          </select>
          <input
            type="button"
            onClick={() => this.setState({ selectedOption1: null })}
            value="Reset"
          />
        </div>
        <div>
          <label>Select That</label>
          <select
            name="form-field-name"
            value={this.state.selectedOption2 || ""}
            onChange={this.handleChange2}
          >
            {filteredOptions.map(tag => (
              <option>{tag.value}</option>
            ))}
          </select>
        </div>
      </Styled>
    );
  }
}
