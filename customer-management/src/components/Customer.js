const Customer = (customer) => {
  return (
    <div>
      <CustomerProfile
        id={customer.id}
        name={customer.name}
        image={customer.image}
      />
      <CustomerInfo
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    </div>
  );
};

const CustomerProfile = (customer) => {
  return (
    <div>
      <img src={customer.image} alt='profile' />
      <h2>
        {customer.name} ({customer.id})
      </h2>
    </div>
  );
};

const CustomerInfo = (customer) => {
  return (
    <div>
      <p>{customer.birthday}</p>
      <p>{customer.gender}</p>
      <p>{customer.job}</p>
    </div>
  );
};

export default Customer;
