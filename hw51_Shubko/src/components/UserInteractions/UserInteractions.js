export const renderContacts = () => {
  return (
    <table>
      <tbody>
        {this.state.contacts.map((elem, index) => {
          return (
            <>
              <tr key={index}>
                <td className="name">{elem.name}</td>
                <td className="username">{elem.username}</td>
                <td className="phone">{elem.phone}</td>

                <button
                  id={elem.id}
                  className="delete-btn"
                  onClick={() => this.deleteContact(elem.id)}
                  name={elem.name}
                >
                  Delete Contact
                </button>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
};
