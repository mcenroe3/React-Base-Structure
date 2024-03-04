import React, { Component } from "react";

export default class CustomersList extends React.Component {
  state = {
    pageTitle: "Customers",

    customers: [
      {
        id: 1,
        name: "Rajesh",
        phone: "+91829182777",
        address: { city: "BLR" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "H K",
        phone: "+918928763628",
        address: { city: "BLR" },
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 3,
        name: "Allen",
        phone: "+9128837282827",
        address: { city: "BLR" },
        photo: "https://picsum.photos/id/1012/60",
      },
      {
        id: 4,
        name: "Ron Dcosta",
        phone: null,
        address: { city: "BLR" },
        photo: "https://picsum.photos/id/1013/60",
      },
      {
        id: 5,
        name: "John Crasta",
        phone: null,
        address: { city: "BLR" },
        photo: "https://picsum.photos/id/1014/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}

          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>

              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };
}
