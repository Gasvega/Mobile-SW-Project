//import { useState } from 'react';
//import ModalBasic from '../src/common/ModalBasic';
import Modal from 'react-native-simple-modal';
import { Modal } from 'react-modal';

// // 모달을 노출하는 페이지
// function Modal() {
//     // 모달창 노출 여부 state
//     const [modalOpen, setModalOpen] = useState(false);

//     // 모달창 노출
//     const showModal = () => {
//         setModalOpen(true);
//     };

//     return (
//         <div>
//             <button onClick={showModal}>모달 띄우기</button>
//             {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
//         </div>
//     );
// }

// export default Modal;

export default class Modall extends React.Component  {
    state ={open : false}; //모달창의 열림여부를 판단해주는 상태변수를 만든다.
    render() {
      return (
        <View style={styles.container}> //가장 큰 컨테이너
          <TouchableOpacity onPress={() => this.setState({open: true})}> //누르면 모달창을 열어주는 버튼
            <Text style={styles.buttontext}>Confirmation</Text>
          </TouchableOpacity>
          <Modal //모달창
            offset={this.state.offset}
            open={this.state.open} //상태가 오픈이어야함.
            modalDidOpen={() => console.log('')} //모달이 열릴경우 콘솔창에 안내문을 띄운다.
            modalDidClose={() => this.setState({open: false})} //모달창을 닫을 경우, 열림 여부를 변경시킨다.
            style={{alignItems: 'center'}}>
              <View>
                <Text style={{fontSize: 20}}>Congraturation!!</Text>
                <Text style={{fontSize: 20}}></Text>
                <TouchableOpacity style={{margin: 3}} onPress={() => this.setState({open: false})}> //누르면 모달창을 닫아주는 버튼
                  <Text style={styles.text}>Close</Text> 
                  </TouchableOpacity>
                </View>
          </Modal>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      zIndex:3,
      position:'absolute',
      height:'100%',
      width:'100%',
      justifyContent:"center",
      alignContent:"center",
      alignItems:"center",
      paddingTop: 50
    },
    buttontext:{
  
      position:'relative',
      left:170,
      bottom:350,
      fontSize:20,
    },
    text:{
      position:'relative',
      fontSize:15,
      fontWeight:'700',
      left:'40%',
    }
  
  })