validateAadhaar(input)
   {
     numbers=/^[0-9]+$/;
     if(input == this.state.aadhar){
        if(numbers.test(this.state.aadhar)){
          Toast.show({
            text: "Good! Go Ahead",
             buttonText: "",
              type: "success"
           });
        } else {
          Toast.show({
            text: "Enter 12-Digit Aadhaar!",
             buttonText: "",
              type: "danger"
           });
        }
        if(this.state.aadhar.length === ''){
          Toast.show({
            text: "Please Enter Aadhaar Number",
             buttonText: "",
              type: "success"
           });
        } else{
          null
        }
        if(this.state.aadhar.length == 11){
          Toast.show({
            text: "Good Job!",
             buttonText: "",
              type: "success"
           });
        }
       
      }
   }
export default validateAadhaar(input);