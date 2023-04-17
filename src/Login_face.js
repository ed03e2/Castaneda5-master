import FacebookLogin from 'react-facebook-login';
import Swal from 'sweetalert2'

function Login_face() {
  const responseFacebook = (respuesta_correcta) => {
    console.log(respuesta_correcta);
    Swal.fire({
        icon: 'success',
        title: 'BIENVENIDO APP UTD',
      })
    
  
    
  }
  const responseFacebook2 = (respuesta_incorrecta) => {
    console.log(respuesta_incorrecta);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'LAS CREDENCIALES SON ERRONEAS',
      })
    
  
    
  }
  return (
    <div className='Login_face'>
      <center><br/><br/>
      <FacebookLogin
        appId="662540142298337"
        autoLoad={false}
        onFailure={responseFacebook2}
        fields="name,email,picture"       
        callback={responseFacebook} />     
        </center>
      </div>      
      );  
}

export default Login_face;