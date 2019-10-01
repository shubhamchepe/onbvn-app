import {AsyncStorage} from 'react-native';
export async function SendFriendRequest() {
    const Token = await AsyncStorage.getItem('LoginToken', (err,res) => {
      if(err){
        console.log(err);
      } else {
          const result = JSON.parse(res);
       var TokenFromAsyncStorage = result.Token;
       TokenFromAsyncStorage.replace(/\"/g, "");                  
      }
    })
    let result1 = JSON.parse(Token);
    console.log(`Value Of Token After Parsing: ${result1.Token}`);
    var url = 'http://192.168.245.2:3000/Notifications';
    const data = {
        ToUserID: this.state.User._id,
        ToUserUsername: this.state.User.username,
        NotificationType:'FriendRequest',
        }
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + result1.Token
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  }

