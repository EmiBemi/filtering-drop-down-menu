import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { string } from "prop-types";

const style: React.CSSProperties = {
    height: 400,
    width: 250,
    display: "inline",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    fontSize: 25,
    color: "#000000",
    padding: 10,
    overflow: "hidden"
};

interface Props {
    text: string
  }
  
//   interface State {
//     selectedOption1: {value: string, label: string}
//   }

interface State {
    selectedOption: string
  }
  

export class New_Drop_Down_Single extends React.Component<Props, State> {
    private selectRef: React.RefObject<HTMLSelectElement>

    constructor(props) {
        super(props)
        this.selectRef = React.createRef();
        this.handleChange1 = this.handleChange1.bind(this);
        this.state = { selectedOption: null };
    }

    componentDidMount() {
        this.selectRef.current;
      }
    
    handleChange1(event) {
        this.setState({ selectedOption: event.target.value || null });
    }

    // Set default properties
    static defaultProps = {
    text: "Hello World!"
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Text" },
    }

    render() {
        const options1 = [
            {value: '', label: 'Default'},
            {value: 'one', label: 'One'},
            {value: 'two', label: 'Two'}
        ];
    

    return (
        <div style={style}>
            <div>
                <label>Select This</label>
                <select 
                    name="form-field-name" 
                    value={this.state.selectedOption || ''}
                    onChange={this.handleChange1}
                >
                {/* <option value="" disabled /> */}
                {options1.map(tag => <option>{tag.value}</option>)}
                </select>
                <input type='button' onClick={() => this.setState({ selectedOption: null })} value='Reset' />
            </div>
        </div>
    )
        }
}

