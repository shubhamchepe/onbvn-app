constructor(props){
      super(props);
      this.state = {
        full_name: '',
           user_name: '',
           mobile_number: '',
           e_mail: '',
           pass_word: ''
      }
    }
    submitAndClear = () => {
      this.setState({
        full_name: '',
           user_name: '',
           mobile_number: '',
           e_mail: '',
           pass_word: ''
      })
    
      /**const newUser = {
        full_name: this.state.full_name,
        user_name: this.state.user_name,
        mobile_number: this.state.mobile_number,
        e_mail: this.state.e_mail,
        pass_word: this.state.password
      }**/
    
      this.props.navigation.navigate('Loginscreen'); //Homescreen1
      console.log('Form Submitted !');
        console.log(`Full Name : ${this.state.full_name}`);
        console.log(`User Name : ${this.state.user_name}`);
        console.log(`Mobile Number : ${this.state.mobile_number}`);
        console.log(`E-Mail : ${this.state.e_mail}`);
        console.log(`Password : ${this.state.pass_word}`);
    
        
    
        axios.post('http://192.168.43.77:3000/api/createusers', {
          full_name: this.state.full_name,
        user_name: this.state.user_name,
        mobile_number: this.state.mobile_number,
        e_mail: this.state.e_mail,
        pass_word: this.state.pass_word
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    
      render() {
        return (
          <View style={styles.Regscreenmainview}> 
          <View style={{bottom: 10}}>
          <Text style={styles.RSlogo}>onbvn</Text>
          <Text style={styles.RSsublogo}>Register With onbvn</Text>
          <Text style={styles.RSsublogo}>To See Photos And Videos Of Your Friends</Text>
          </View>
          <View style={{bottom: 10}}>
               <TextInput 
               style={styles.LSInp1}
               placeholder={'Full Name'}
               placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
               underlineColorAndroid='transparent'
               onChangeText={full_name => this.setState({full_name})}
               value={this.state.full_name}
               clearButtonMode = 'always'
               />
               <TextInput 
               style={styles.LSInp2}
               placeholder={'Username'}
               placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
               underlineColorAndroid='transparent'
               onChangeText={user_name => this.setState({user_name})}
               value={this.state.user_name}
               clearButtonMode = 'always'
               />
               <TextInput 
               style={styles.LSInp2}
               placeholder={'Mobile Number'}
               placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
               keyboardType='phone-pad'
               underlineColorAndroid='transparent'
               onChangeText={mobile_number => this.setState({mobile_number})}
               value={this.state.mobile_number}
               clearButtonMode = 'always'
    
               />
               <TextInput 
               style={styles.LSInp2}
               placeholder={'Email'}
               placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
               keyboardType='email-address'
               underlineColorAndroid='transparent'
               onChangeText={e_mail => this.setState({e_mail})}
               value={this.state.e_mail}
               clearButtonMode = 'always'
    
               />
               <TextInput 
               style={styles.LSInp2}
               placeholder={'Password'}
               placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
               secureTextEntry
               underlineColorAndroid='transparent'
               onChangeText={pass_word => this.setState({pass_word})}
               value={this.state.pass_word}
               clearButtonMode = 'always'
    
               />
                <View style={{top: 10}}>
                 <Text style={{color: '#ffffff', textAlign: 'center', fontSize: 15, fontFamily: 'montserratregular' }}>By Signing Up, You Agree Our <Text style={{fontWeight: '900', fontSize: 15, fontFamily: 'montserratregular'}}>Terms</Text>,</Text>
                 <Text style={{color: '#ffffff', textAlign: 'center', fontSize: 15, fontFamily: 'montserratregular' }}><Text style={{fontWeight: '900', fontSize: 15, fontFamily: 'montserratregular'}}>Data Policy</Text> & <Text style={{fontWeight: '900', fontSize: 15, fontFamily: 'montserratregular'}}>Cookies Policy</Text></Text>
                 </View>
                 <View style={{top: 20}}>
                {/*<GetStarted />*/}
                <View style={{alignItems: 'center'}}>
                <TouchableOpacity title="Back" onPress={() => this.submitAndClear()} style={{backgroundColor: '#303030', width: Dimensions.get('window').width-200, height: 45, justifyContent: 'center', borderRadius: 5}} >
                <Text style={{fontSize: 18, fontWeight: 'normal', textAlign: 'center', justifyContent: 'center', color: '#ffffff'}}>Get Started</Text>
                </TouchableOpacity>
                </View>
                </View>
               </View>
           </View>
        );
      }









      constructor(props){
      super(props);
      this.state = {
        full_name: '',
           user_name: '',
           mobile_number: '',
           e_mail: '',
           pass_word: ''
      }
    }
    submitAndClear = async () => {
      this.setState({
        full_name: '',
           user_name: '',
           mobile_number: '',
           e_mail: '',
           pass_word: ''
      })
    
      /**const newUser = {
        full_name: this.state.full_name,
        user_name: this.state.user_name,
        mobile_number: this.state.mobile_number,
        e_mail: this.state.e_mail,
        pass_word: this.state.password
      }**/
    
      this.props.navigation.navigate('Loginscreen'); //Homescreen1
      console.log('Form Submitted !');
        console.log(`Full Name : ${this.state.full_name}`);
        console.log(`User Name : ${this.state.user_name}`);
        console.log(`Mobile Number : ${this.state.mobile_number}`);
        console.log(`E-Mail : ${this.state.e_mail}`);
        console.log(`Password : ${this.state.pass_word}`);
    

        try {
            const value = await AsyncStorage.getItem('UserInfoPart1');
            if (value !== null) {
              // We have data!!
              console.warn(value);
            }
          } catch (error) {
            // Error retrieving data
            console.warn(`Error occured: ${error}`)

          }
        
    
       /** axios.post('http://192.168.43.77:3000/api/createusers', {
          full_name: this.state.full_name,
        user_name: this.state.user_name,
        mobile_number: this.state.mobile_number,
        e_mail: this.state.e_mail,
        pass_word: this.state.pass_word
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });**/
    }
    
      render() {
        return (
          <View style={styles.Regscreenmainview}> 
          
          <View style={{bottom: 10}}>
          <Text style={styles.RSlogo}>onbvn</Text>
          <Text style={styles.RSsublogo}>Register With onbvn</Text>
          <Text style={styles.RSsublogo}>To See Photos And Videos Of Your Friends</Text>
          <View>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          color="#ffffff"
          progress={0.66}
        />
      </View>
          </View>
          <View style={{bottom: 10}}>
               <TextInput 
               style={styles.LSInp1}
               placeholder={'Profile-Pic'}
               placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
               underlineColorAndroid='transparent'
               onChangeText={full_name => this.setState({full_name})}
               value={this.state.full_name}
               clearButtonMode = 'always'
               />
               <TextInput 
               style={styles.LSInp2}
               placeholder={'Nick-Name'}
               placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
               underlineColorAndroid='transparent'
               onChangeText={user_name => this.setState({user_name})}
               value={this.state.user_name}
               clearButtonMode = 'always'
               />
               <TextInput 
               style={styles.LSInp2}
               placeholder={'D-O-B'}
               placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
               keyboardType='phone-pad'
               underlineColorAndroid='transparent'
               onChangeText={mobile_number => this.setState({mobile_number})}
               value={this.state.mobile_number}
               clearButtonMode = 'always'
    
               />
               <TextInput 
               style={styles.LSInp2}
               placeholder={'City'}
               placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
               keyboardType='email-address'
               underlineColorAndroid='transparent'
               onChangeText={e_mail => this.setState({e_mail})}
               value={this.state.e_mail}
               clearButtonMode = 'always'
    
               />
               <TextInput 
               style={styles.LSInp2}
               placeholder={'Area'}
               placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
               secureTextEntry
               underlineColorAndroid='transparent'
               onChangeText={pass_word => this.setState({pass_word})}
               value={this.state.pass_word}
               clearButtonMode = 'always'
    
               />
              
                <View style={{top: 10}}>
                 <Text style={{color: '#ffffff', textAlign: 'center', fontSize: 15, fontFamily: 'montserratregular' }}>By Signing Up, You Agree Our <Text style={{fontWeight: '900', fontSize: 15, fontFamily: 'montserratregular'}}>Terms</Text>,</Text>
                 <Text style={{color: '#ffffff', textAlign: 'center', fontSize: 15, fontFamily: 'montserratregular' }}><Text style={{fontWeight: '900', fontSize: 15, fontFamily: 'montserratregular'}}>Data Policy</Text> & <Text style={{fontWeight: '900', fontSize: 15, fontFamily: 'montserratregular'}}>Cookies Policy</Text></Text>
                 </View>
                 <View style={{top: 35}}>
                {/*<GetStarted />*/}
                <View style={{alignItems: 'flex-end'}}>
                <TouchableOpacity title="Back" onPress={() => this.props.navigation.navigate('Registerscreen2')} style={{backgroundColor: '#303030', width: Dimensions.get('window').width-225, height: 45, justifyContent: 'center', borderRadius: 5,marginRight: 7}} >
                <Text style={{fontSize: 18, fontWeight: 'normal', textAlign: 'center', justifyContent: 'center', color: '#ffffff'}}>Next</Text>
                </TouchableOpacity>
                </View>
                </View>
                <View style={{top: -10}}>
                {/*<GetStarted />*/}
                <View style={{alignItems: 'flex-start'}}>
                <TouchableOpacity title="Back" onPress={() => this.props.navigation.navigate('Registerscreen')} style={{backgroundColor: '#303030', width: Dimensions.get('window').width-225, height: 45, justifyContent: 'center', borderRadius: 5,marginLeft: 7}} >
                <Text style={{fontSize: 18, fontWeight: 'normal', textAlign: 'center', justifyContent: 'center', color: '#ffffff'}}>Back</Text>
                </TouchableOpacity>
                </View>
                </View>
               </View>
           </View>
        );
      }