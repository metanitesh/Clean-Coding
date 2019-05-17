function calculateAndPay(){
  switch(e.type){
    case COMMISSIONED:
      return calculateCommissionedPay(e);
    case HOURLY:
      return calculateHourlyPaid(e)
    default:
      throw new InvalidEmployeeType(e.type);
  }
}