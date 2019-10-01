import { AsyncStorage} from 'react-native';

export default GetIdOfLoggedInUser = async () => {
    try{
      let InfoFromAsync = await AsyncStorage.getItem('LoginToken');
      InfoFromAsync = JSON.parse(InfoFromAsync);
      GetUserId = InfoFromAsync.UserID;
       console.log(GetUserId);
       this.setState({UserIDFromAsync:GetUserId})
       fetch(`http://192.168.245.2:3000/getUserById/${GetUserId}`)
.then((response) => response.json())
.then((responseJson) => {
 // return responseJson.firstname;
  console.log(responseJson.firstname);
  this.setState({User:responseJson})
  this.CheckIfItsMyProfile();
  this.PreLoadProfile();
})
    } catch(error){
        console.log(error);
    }
  }

  CheckIfItsMyProfile = async () => {
    try{
      let UserID = this.state.User._id;
      let AsyncID = this.state.UserIDFromAsync;
      console.log(`UserID:${UserID}`);
      console.log(`AsyncID:${AsyncID}`);
        if(UserID == AsyncID){
          this.setState({
            ShowBtn:false
          })
        } else{
          this.setState({
            ShowBtn:true
          })
        }
    } catch(error){
      console.log(error);
      
    }
 }


 PreLoadProfile = async () => {
   try{
      let UserData = this.state.User;
      if(UserData !== {}){
        this.setState({
          LoadProfile:true
        })
      } else{
        this.setState({
          LoadProfile:false
        })
      }
   } catch(error){
     console.log(error);
   }
 }