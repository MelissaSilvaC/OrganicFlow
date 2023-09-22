import axios from 'axios'

export default function cadastrarDados(){
    console.log(email + password)
    axios.post('https://vueauth-backend.vercel.app%27+%27/login',% 7B//verifica login
        email: email,
        password: password,
      })
      .then(
            response => {
                if (response.data.fail) {//pega o fail do json; fail===true]
                    //email e password incorretos
                    console.log('erro: ' + response.data.error)//pega o error: do json
                    this.alert = true
                    this.error = response.data.error
                } else {
                    // console.log(response.data.token)//se usuário existir
                    localStorage.setItem('token', response.data.token); //armazena o token no local
                    // axios.defaults.headers[
                    //   "authorization"
                    // ]=Bearer ${response.data.token}

                    this.$router.push('/');

                }
            }
        )
    .catch((error) => {
        console.log(error);
    });
    }
    ,
close(){
    this.alert = false
}