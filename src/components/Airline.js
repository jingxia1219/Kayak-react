function Airline() {
  const airlineList = fetch(
    "kayak.com/h/mobileapis/directory/airlines/homework"
  ).then((response) => {
    return response.json;
  });
  console.log(airlineList);
}

export default Airline;
