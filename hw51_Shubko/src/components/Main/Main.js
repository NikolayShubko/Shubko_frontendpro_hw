import { Component } from "react";
import axios from "axios";
import Modal from "../Modal/Modal";
import Input from "../Input/Inputs";
import { v4 as uuidv4 } from "uuid";
import "./Main.css";
class Main extends Component {
  constructor() {
    super();
    this.state = {
      contacts: null,
      loading: true,
      modal: false,
      name: "",
      userName: "",
      phoneNumber: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) =>
        this.setState({ contacts: response.data, loading: false })
      );
  }
  handleSetNewUser = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  addNewUser = () => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          name: this.state.name,
          username: this.state.userName,
          phone: this.state.phoneNumber,
          id: uuidv4(),
        },
      ],
    });
    this.cancelInput();
  };
  deleteContact = (id) => {
    const filtered = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts: filtered });
  };
  cancelInput = () => {
    this.setState({
      name: "",
      userName: "",
      phoneNumber: "",
      modal: !this.state.modal,
    });
  };
  renderContacts = () => {
    return (
      <table className="table-contacts">
        <tbody className="table-contacts-body">
          {this.state.contacts.map((elem, index) => {
            return (
              <>
                <tr>
                  <td className="name" key={elem.name}>
                    {elem.name}
                  </td>
                  <td className="username" key={elem.username}>
                    {elem.username}
                  </td>
                  <td className="phone" key={elem.phone}>
                    {elem.phone}
                  </td>
                  <td key={uuidv4()}>
                    <button
                      id={elem.id}
                      className="delete-btn"
                      onClick={() => this.deleteContact(elem.id)}
                      name={elem.name}
                    >
                      Delete Contact
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    );
  };

  render() {
    return this.state.loading ? (
      <div>Wait a minute</div>
    ) : (
      <>
        <Modal isShown={this.state.modal}>
          <Input
            className={"new-user-input"}
            value={this.state.name}
            name={"name"}
            handleChange={this.handleSetNewUser}
            placeholder={"Name"}
          />
          <Input
            className={"new-user-input"}
            value={this.state.userName}
            name={"userName"}
            handleChange={this.handleSetNewUser}
            placeholder={"User Name"}
          />
          <Input
            className={"new-user-input"}
            value={this.state.phoneNumber}
            name={"phoneNumber"}
            handleChange={this.handleSetNewUser}
            placeholder={"Phone Number"}
          />
          <button className="add-btn" onClick={this.addNewUser}>
            Add new
          </button>
          <button className="cancel-btn" onClick={this.cancelInput}>
            Cancel
          </button>
        </Modal>
        {this.renderContacts()}
        <button
          className="add-btn"
          onClick={() => {
            this.setState({ modal: !this.state.modal });
          }}
        >
          add new
        </button>
      </>
    );
  }
}

export default Main;
